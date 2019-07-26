<template>
  <div class="memo-app">
    <memo-form @addMemo="addMemo"/>
    <ul class="memo-list">
      <memo v-for="memo in memos"
            :key="memo.id"
            :memo="memo"
            @setEditingId="SET_EDITING_ID"
            @resetEditingId="RESET_EDITING_ID"
            :editingId="editingId"
            @deleteMemo="deleteMemo"
            @updateMemo="updateMemo"/>
    </ul>
  </div>
</template>

<script>
import MemoForm from './MemoForm';
import Memo from './Memo';
import { mapState, mapActions, mapMutations } from 'vuex';
import { RESET_EDITING_ID, SET_EDITING_ID } from '../store/mutations-types';

export default {
  name: 'MemoApp',
  computed: {
    ...mapState([
      'memos',
      'editingId'
    ])
  },
  created () {
    this.fetchMemos();
  },
  methods: {
    ...mapMutations([
      SET_EDITING_ID,
      RESET_EDITING_ID
    ]),
    ...mapActions([
      'fetchMemos',
      'addMemo',
      'deleteMemo',
      'updateMemo'
    ])
  },
  components: {
    MemoForm,
    Memo
  }
};
</script>

<style scoped>
  .memo-list {
    padding: 20px 0;
    margin: 0;
  }
</style>
