## Board example Frontend 샘플

---

CanDoVueJS(가제)의 클라이언트 어플리케이션 제작을 위해 만들어진 클라이언트 서버 입니다.

### Vue-CLI의 선택 옵션
- Vue build
  - [x] Runtime + Compiler: recommended for most users
  - [ ] Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere 
- Install vue-router?  (`Y`/n)
- Use ESLint to lint your code? (`Y`/n) 
- Pick an ESLint preset 
  - [x] Standard (https://github.com/standard/standard) 
  - [ ] Airbnb (https://github.com/airbnb/javascript) 
  - [ ] none (configure it yourself) 
- Set up unit tests (Y/`n`) 
- Should we run `npm install` for you after the project has been created? (recommended) (Use arrow keys)
  - [x] Yes, use NPM 
  - [ ] Yes, use Yarn 
  - [ ] No, I will handle that myself 


### Pages with features

---

#### 회원가입
- [ ] validation 체크 (이메일, 비밀번호)

#### 로그인
- [ ] validation 체크 (이메일, 비밀번호)

#### 게시물 작성
- [ ] validation 체크 (제목, 컨텐츠 내용)

#### 게시물 리스트
- [ ] 해당 게시글 내용 확인

#### 게시물 수정
- [ ] validation 체크 (제목, 컨텐츠 내용)
- [ ] 게시판 index 번호, 작성자, 작성일 노출

#### 게시물 상세
- [ ] 게시물 좋아요 (토글 기능 포함)
- [ ] 게시글에 대한 댓글(CRUD)
- [ ] 해당 게시글 삭제 (Permission 부여)

### 사용 라이브러리
- [ ] bootstrap4-css
- [ ] font-awesome
- [ ] axios
- [ ] vuex
