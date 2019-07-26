<template>
  <div class="memo-form">
    <form @submit.prevent="addMemo">
      <fieldset>
        <div>
          <input class="memo-form__title-form"
                 type="text"
                 v-model="title"
                 placeholder="메모의 제목을 입력해주세요."/>
          <textarea class="memo-form__content-form"
                    v-model="content"
                    placeholder="메모의 내용을 입력해주세요."/>
          <button type="reset"><i class="fas fa-sync-alt"></i></button>
        </div>
        <button type="submit">등록하기</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MemoForm',
  data () {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
    resetFields () {
      // 제목과 내용을 빈 값으록 초기화 시켜준다.
      this.title = '';
      this.content = '';
    },
    addMemo () {
      const { title, content } = this;
      const isEmpty = title.length <= 0 || content.length <= 0;
      if (isEmpty) {
        return false;
      }
      this.$emit('addMemo', { title, content });
      // 부모 컴포넌트에 데이터를 전파한 후 데이터를 다시 원상태로 초기화한다.
      this.resetFields();
    }
  }
};
</script>

<style scoped>
  .memo-form {
    margin-bottom: 24px;
    padding-bottom: 40px;
    border-bottom: 1px solid #eee;
  }
  .memo-form form fieldset div {
    position: relative;
    padding: 24px;
    margin-bottom: 20px;
    box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
  }
  .memo-form form fieldset div button[type="reset"] {
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-size: 16px;
    background: none;
  }
  .memo-form form fieldset button[type="submit"] {
    float: right;
    width: 96px;
    padding: 12px 0;
    border-radius: 4px;
    background-color: #ff5a00;
    color: #fff;
    font-size: 16px;
  }
  .memo-form form fieldset .memo-form__title-form {
    width: 100%;
    margin-bottom: 12px;
    font-size: 18px;
    line-height: 26px;
  }
  .memo-form form fieldset .memo-form__content-form {
    width: 100%;
    height: 66px;
    font-size: 14px;
    line-height: 22px;
    vertical-align: top;
  }
  .memo-form input:focus {
    outline: none;
  }
</style>
