# 교육 칼럼 운영

`columns.json` 배열에 최신 칼럼 객체를 추가합니다. 기존 객체를 삭제하거나 임의 수정하지 않습니다.
필수 필드: slug(고유 영문 소문자·하이픈), title, description, date(한국 현지 YYYY-MM-DD), category, intro, sections(heading, paragraphs, 선택 prompt), sources(title, url), sourceNote.

홈페이지 최신 3개, /columns 목록, 개별 페이지와 사이트맵은 이 배열에서 생성됩니다. 페이지 메타데이터와 구조화 데이터도 자동 생성됩니다.

게시 전 `npm install --no-package-lock --no-audit --no-fund`(의존성이 없을 때만), `npm run build`를 실행합니다. 최신 main 기준으로 변경하고, 연결된 Vercel의 배포 및 실제 공개 URL을 확인합니다. 성공이 확인되지 않으면 커밋 반영과 공개 상태를 구분해 보고합니다.

같은 주제의 네이버 원고는 blog-drafts/YYYY-MM-DD-slug.md에 보관합니다. 네이버에는 자동 게시하지 않습니다. 실제 경험을 지어내지 않으며, 공개 교육 정보는 공식 자료로 확인합니다.
