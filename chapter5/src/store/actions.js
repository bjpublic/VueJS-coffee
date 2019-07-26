import axios from 'axios';
import {
  FETCH_MEMOS,
  ADD_MEMO,
  DELETE_MEMO,
  EDIT_MEMO
} from './mutations-types';

const memoAPICore = axios.create({
  baseURL: 'http://localhost:8000/api/memos'
});

export function fetchMemos ({ commit }) {
  memoAPICore.get('/')
    .then(res => {
      commit(FETCH_MEMOS, res.data);
    });
}

export function addMemo ({ commit }, payload) {
  memoAPICore.post('/', payload)
    .then(res => {
      // 3. ADD_MEMO 변이를 호출하고 API를 통해 받아온 메모 데이터를 넘겨준다.
      commit(ADD_MEMO, res.data);
    });
}

export function deleteMemo ({ commit }, id) {
  memoAPICore.delete(`/${id}`)
    .then(() => {
      commit(DELETE_MEMO, id);
    });
}

export function updateMemo ({ commit }, payload) {
  const { id, content } = payload;
  memoAPICore.put(`/${id}`, { content })
    .then(() => {
      commit(EDIT_MEMO, payload);
    });
}

export default {
  fetchMemos,
  addMemo,
  deleteMemo,
  updateMemo
};
