<template>
  <div class="comment-item">
    <strong>{{ comment.user.name }}</strong><span>{{ comment.createdAt }}</span>
    <div v-if="isEditing">
      <textarea
        v-model="editMessage"
        rows="3">
      </textarea>
      <button @click="onEdit">수정완료</button>
    </div>
    <p v-else>{{ comment.contents }}</p>
    <ul v-if="isMyComment">
      <li><button type="button" @click="toggleEditMode">{{ editButtonText }}</button></li>
      <li><button type="button" @click="onDelete">삭제</button></li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'CommentItem',
  props: {
    comment: {
      type: Object,
      required: true,
      validator (comment) {
        const isValidCommentId = typeof comment.id === 'number'
        const isValidContents = comment.contents && comment.contents.length
        const isValidUser = !!comment.user
        return isValidCommentId && isValidContents && isValidUser
      }
    }
  },
  data () {
    return {
      isEditing: false,
      editMessage: ''
    }
  },
  computed: {
    isMyComment () {
      return this.isAuthorized && this.comment.user.id === this.me.id
    },
    editButtonText () {
      return this.isEditing ? '수정 취소' : '수정'
    },
    isValidComment () {
      return this.editMessage.length > 0 && this.editMessage.length < 256
    },
    ...mapState([ 'me' ]),
    ...mapGetters([ 'isAuthorized' ])
  },
  methods: {
    toggleEditMode () {
      this.isEditing = !this.isEditing
      if (this.isEditing) {
        this.editMessage = this.comment.contents
      }
    },
    onDelete () {
      const { id } = this.comment
      this.$emit('delete', id)
    },
    onEdit () {
      if (this.isValidComment) {
        this.isEditing = false
        const { id } = this.comment
        this.$emit('edit', { id, comment: this.editMessage })
      } else {
        alert('댓글은 1자 이상 255자 이하여야 합니다')
      }
    }
  }
}
</script>
