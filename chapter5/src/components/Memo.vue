<template>
  <li class="memo-item">
    <strong>{{ memo.title }}</strong>
    <p @dblclick="handleDblClick">
      <template v-if="!isEditing">{{ memo.content }}</template>
      <input v-else
             type="text"
             ref="content"
             :value="memo.content"
             @blur="handleBlur"
             @keydown.enter="updateMemo"/>
    </p>
    <button type="button" @click="deleteMemo">
      <i class="fas fa-times"></i>
    </button>
  </li>
</template>

<script>
export default {
  name: 'Memo',
  props: {
    memo: {
      type: Object
    },
    editingId: {
      type: Number
    }
  },
  computed: {
    isEditing () {
      return this.memo.id === this.editingId;
    }
  },
  methods: {
    handleBlur () {
      this.$emit('resetEditingId');
    },
    deleteMemo () {
      const id = this.memo.id;
      this.$emit('deleteMemo', id);
    },
    handleDblClick () {
      const { id } = this.memo;
      this.$emit('setEditingId', id);
      this.$nextTick(() => {
        this.$refs.content.focus();
      });
    },
    updateMemo (e) {
      const id = this.memo.id;
      const content = e.target.value.trim();
      if (content.length <= 0) {
        return false;
      }
      this.$emit('updateMemo', { id, content });
      this.$refs.content.blur();
    }
  }
};
</script>

<style scoped>
  .memo-item {
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
    padding: 24px;
    box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    list-style: none;
  }
  .memo-item input[type="text"] {
    border: 1px solid #ececec;
    font-size: inherit;
  }
  .memo-item button {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 20px;
    color: #e5e5e5;
    border: 0;
  }
  .memo-item strong {
    display: block;
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: normal;
    word-break: break-all;
  }
  .memo-item p {
    margin: 0;
    font-size: 14px;
    line-height: 22px;
    color: #666;
  }
  .memo-item p input[type="text"] {
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
  }
  .memo-item p input[type="text"] {
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
  }
</style>
