const navigation = [
  ["소개", "#about"],
  ["강의분야", "#programs"],
  ["주요경력", "#career"],
  ["저서", "#books"],
  ["문의", "#contact"],
];

const programs = [
  {
    no: "01",
    title: "ChatGPT 300% 활용하기",
    text: "질문하는 법부터 글쓰기, 기획, 자료 정리까지 일상과 업무에 바로 쓰는 ChatGPT 실습",
    tags: ["생성형 AI 입문", "프롬프트", "업무 활용"],
  },
  {
    no: "02",
    title: "AI 콘텐츠 제작과 업무효율화",
    text: "반복 문서, 카드뉴스, 웹포스터와 발표 자료를 AI로 빠르고 완성도 있게 만드는 과정",
    tags: ["Canva", "Gamma", "NotebookLM"],
  },
  {
    no: "03",
    title: "AI 이미지·영상 만들기",
    text: "이미지 생성부터 스마트폰 촬영, CapCut 편집까지 나만의 이야기를 영상으로 완성하는 실습",
    tags: ["이미지 생성", "CapCut", "숏폼 영상"],
  },
  {
    no: "04",
    title: "AI와 함께 작가 되기",
    text: "생각을 글로 꺼내고 이미지와 디자인을 더해 나만의 시화집과 전자책을 완성하는 과정",
    tags: ["글쓰기", "시화집", "전자책"],
  },
];

const career = [
  ["2026", "한국AI콘텐츠연구소 주관 300명 온라인 특강", "AI와 함께 만드는 나만의 시화집"],
  ["2026", "한국AI콘텐츠연구소 AI교육 강사 대상 온라인 특강", "AI와 함께 만드는 나만의 시화집"],
  ["2026", "미용인·소상공인 대상", "AI 활용 이미지 생성과 영상 편집"],
  ["2026", "원주 한지 문화센터 & 그림책 센터", "AI 활용 홍보 실무 교육"],
  ["현재", "서울 금천구 ICT 활용 인지훈련", "시니어 눈높이에 맞춘 참여형 교육"],
  ["현재", "부천시 오정구 정신복지과 출강", "중장년 대상 힐링·인지 프로그램"],
  ["다수", "공공·복지·교육기관 AI 교육", "AI 기초부터 콘텐츠 결과물 완성까지"],
];

const books = [
  {
    no: "01",
    title: <>와니의<br />상상주머니</>,
    titleText: "와니의 상상주머니",
    desc: "호기심 많은 와니와 동물 친구들의 유쾌하고 따뜻한 창작동화",
    image: "/book-wanini.webp",
    paperUrl: "https://www.yes24.com/Product/Search?domain=ALL&query=%EC%99%80%EB%8B%88%EC%9D%98%20%EC%83%81%EC%83%81%EC%A3%BC%EB%A8%B8%EB%8B%88",
    ebookUrl: "https://www.yes24.com/product/goods/196575639",
    badge: "전자책 · 종이책 출간",
  },
  {
    no: "02",
    title: <>시작, 그 떨리는<br />설레임에 대하여</>,
    titleText: "시작, 그 떨리는 설레임에 대하여",
    desc: "새로운 시작을 응원하는 시화집",
    image: "/book-04.webp",
    paperUrl: "https://www.yes24.com/product/goods/193406846",
    ebookUrl: "https://www.yes24.com/product/goods/193181467",
  },
  {
    no: "03",
    title: <>기억속으로</>,
    titleText: "기억속으로",
    desc: "치매 어르신과 가족을 위한 시화집",
    image: "/book-05.webp",
    paperUrl: "https://www.yes24.com/product/goods/191021004",
    ebookUrl: "https://www.yes24.com/product/goods/191480588",
  },
  {
    no: "04",
    title: <>엄마만<br />미필이야!</>,
    titleText: "엄마만 미필이야!",
    desc: "엄마의 시선으로 담아낸 특별한 기록",
    image: "/book-03.webp",
    paperUrl: "https://www.yes24.com/product/goods/177864050",
    ebookUrl: "https://www.yes24.com/product/goods/177253699",
  },
  {
    no: "05",
    title: <>얘랑<br />살아봤더니…</>,
    titleText: "얘랑 살아봤더니…",
    desc: "삶에서 길어 올린 진솔한 이야기",
    image: "/book-02.webp",
    paperUrl: "https://www.yes24.com/product/goods/177864307",
    ebookUrl: "https://www.yes24.com/product/goods/172794746",
  },
  {
    no: "06",
    title: <>애쓴 마음으로<br />충분해</>,
    titleText: "애쓴 마음으로 충분해",
    desc: "마음을 다독이는 따뜻한 기록",
    image: "/book-01.webp",
    paperUrl: "https://www.yes24.com/product/goods/173934714",
  },
];

const qualifications = [
  "생성형 AI교육 전문가", "AI콘텐츠강사", "인지훈련지도사", "인성지도사 1급", "코딩지도사 1급",
  "SNS마케팅 전문가 1급", "CapCut 크리에이터", "금천구 중장년 퍼실리테이터",
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="주요 메뉴">
        <a className="brand" href="#top" aria-label="AI강사 김주연 홈">
          <strong>김주연</strong>
          <span>AI EDUCATOR &amp; AUTHOR</span>
        </a>
        <nav>
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">강의 문의</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI EDUCATION · CONTENT · WRITING</p>
          <h1>
            <span>AI가 낯선 사람도,</span>
            <span>자신의 이야기를</span>
            <span>콘텐츠로 만들 수 있도록</span>
          </h1>
          <span className="gold-line" aria-hidden="true" />
          <p className="hero-intro">
            AI강사 김주연 <i>—</i> 한국AI콘텐츠연구소 전임강사 · 작가 · 인지훈련강사
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">강의 의뢰하기</a>
            <a className="button secondary" href="#programs">강의 분야 보기</a>
          </div>
          <div className="proofs" aria-label="주요 성과">
            <span><b />300명 온라인 특강</span>
            <span><b />공공·복지·교육기관 출강</span>
            <span><b />저서 11권</span>
          </div>
        </div>

        <div className="portrait-wrap" aria-label="AI강사 김주연 프로필 사진">
          <span className="portrait-outline" aria-hidden="true" />
          <span className="portrait-shadow" aria-hidden="true" />
          <img src="/kim-juyeon-portrait.webp" alt="네이비 정장을 입은 AI강사 김주연" />
        </div>
      </section>

      <section className="about-preview" id="about">
        <div className="section-heading centered">
          <p className="section-kicker">ABOUT KIM JU YEON</p>
          <h2>기술보다 사람을 먼저 생각하는<br />따뜻한 AI 교육</h2>
          <p>어려운 기능을 설명하는 데서 멈추지 않고, 배운 사람이 자신의 이야기와 경험을 실제 결과물로<br /><span className="keep-together">완성하도록 돕습니다.</span></p>
        </div>
        <div className="about-grid">
          <article>
            <span>강사</span>
            <h3>쉽게 배우고<br />바로 활용하도록</h3>
            <p>처음 AI를 만나는 분도 차근차근 따라올 수 있도록 눈높이에 맞춰 설명하고 충분한 실습 시간을 제공합니다.</p>
          </article>
          <article>
            <span>작가</span>
            <h3>평범한 경험을<br />특별한 콘텐츠로</h3>
            <p>누구에게나 있는 삶의 이야기를 글과 이미지, 책과 영상이라는 따뜻한 결과물로 연결합니다.</p>
          </article>
          <article>
            <span>동행자</span>
            <h3>배움의 속도가 달라도<br />끝까지 함께</h3>
            <p>시니어와 중장년, 디지털 입문자의 속도를 존중하며 ‘나도 할 수 있다’는 자신감을 함께 만듭니다.</p>
          </article>
        </div>
      </section>

      <section className="programs section-pad" id="programs">
        <div className="section-heading split-heading">
          <div>
            <p className="section-kicker">LECTURE PROGRAMS</p>
            <h2>배우고 끝나는 강의가 아닌,<br />결과물이 남는 교육</h2>
          </div>
          <p>기관과 수강생의 목적, 연령, 디지털 숙련도에 맞춰 입문 강의부터 실습형 프로젝트까지 구성합니다.</p>
        </div>
        <div className="program-grid">
          {programs.map((program) => (
            <article className="program-card" key={program.no}>
              <div className="card-top"><span>{program.no}</span><b aria-hidden="true">↗</b></div>
              <h3>{program.title}</h3>
              <p>{program.text}</p>
              <div className="tags">{program.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="method-section">
        <div className="method-copy">
          <p className="section-kicker">HOW I TEACH</p>
          <h2>
            <span>한 사람도</span>
            <span>놓치지 않는</span>
            <span>김주연 강사의 수업</span>
          </h2>
          <p>설명은 짧고 명확하게, 실습은 충분하게. 수강생이 자신의 손으로 완성하고 서로의 결과를 나누는 순간까지 함께합니다.</p>
          <a href="#contact">우리 기관에 맞는 강의 상담하기 <span>→</span></a>
        </div>
        <ol className="method-list">
          <li><span>01</span><div><h3>눈높이에 맞춘 쉬운 설명</h3><p>어려운 용어 대신 익숙한 사례와 큰 화면, 단계별 안내로 진행합니다.</p></div></li>
          <li><span>02</span><div><h3>따라 하며 익히는 충분한 실습</h3><p>도구를 직접 사용하고 막히는 부분을 바로 해결하며 자신감을 키웁니다.</p></div></li>
          <li><span>03</span><div><h3>나만의 결과물 완성</h3><p>문서, 이미지, 영상, 책 등 수업 이후에도 활용할 수 있는 결과를 남깁니다.</p></div></li>
        </ol>
      </section>

      <section className="career section-pad" id="career">
        <div className="section-heading split-heading">
          <div><p className="section-kicker">LECTURE EXPERIENCE</p><h2>사람과 현장에서<br />쌓아온 교육 경험</h2></div>
          <p>공공기관, 복지기관, 교육 현장과 온라인에서 생성형 AI와 인지훈련, 콘텐츠 제작 교육을 진행하고 있습니다.</p>
        </div>
        <div className="career-list">
          {career.map(([year, title, desc]) => (
            <article key={title}><span>{year}</span><h3>{title}</h3><p>{desc}</p></article>
          ))}
        </div>
        <div className="roles">
          <p>현재 활동</p>
          <div>
            <span>한국AI콘텐츠연구소 전임강사</span>
            <span>브레인아카데미 인지훈련강사</span>
            <span>대한노인회 금천지회 시니어 강사</span>
            <span>작가</span>
          </div>
        </div>
      </section>

      <section className="books section-pad" id="books">
        <div className="section-heading centered light">
          <p className="section-kicker">BOOKS &amp; STORIES</p>
          <h2>삶을 기록하고,<br />따뜻한 콘텐츠로 전합니다</h2>
          <p>전자책과 종이책으로 총 11권을 출간했습니다. 글쓰기는 김주연 강사의 AI 교육을 사람의 이야기와 연결하는 특별한 힘입니다.</p>
        </div>
        <div className="book-grid">
          {books.map((book) => (
            <article key={book.no}>
              <div className="book-cover">
                <span>{book.no}</span>
                {book.badge && <em>{book.badge}</em>}
                <img src={book.image} alt={`김주연 저서 『${book.titleText}』 표지`} />
              </div>
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.desc}</p>
                <div className="book-actions" aria-label={`『${book.titleText}』 구매 링크`}>
                  {book.paperUrl && (
                    <a href={book.paperUrl} target="_blank" rel="noopener noreferrer">
                      종이책 보기 <b aria-hidden="true">↗</b>
                    </a>
                  )}
                  {book.ebookUrl && (
                    <a href={book.ebookUrl} target="_blank" rel="noopener noreferrer">
                      전자책 보기 <b aria-hidden="true">↗</b>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="qualifications section-pad">
        <div className="section-heading split-heading compact">
          <div><p className="section-kicker">QUALIFICATIONS</p><h2>전문 자격과<br />교육 역량</h2></div>
          <div className="qualification-list">{qualifications.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-card">
          <div>
            <p className="section-kicker">LECTURE INQUIRY</p>
            <h2>AI가 쉬워지는<br />순간을 함께<br />만들겠습니다</h2>
            <p className="contact-description">
              교육 대상, 인원, 시간과 희망 주제를<br />
              알려주시면 기관에 맞는 강의를<br />
              제안해드립니다.
            </p>
          </div>
          <div className="contact-links">
            <a href="tel:01030243529"><span>전화</span><strong>010-3024-3529</strong><b>↗</b></a>
            <a href="mailto:juyeonk65@hanmail.net"><span>이메일</span><strong>juyeonk65@hanmail.net</strong><b>↗</b></a>
            <a href="https://blog.naver.com/aibuddy3529" target="_blank" rel="noreferrer"><span>블로그</span><strong>blog.naver.com/aibuddy3529</strong><b>↗</b></a>
            <a href="https://litt.ly/juyeonk65" target="_blank" rel="noreferrer"><span>프로필</span><strong>litt.ly/juyeonk65</strong><b>↗</b></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><strong>김주연</strong><span>AI EDUCATOR &amp; AUTHOR</span></div>
        <div className="social-links">
          <a href="https://blog.naver.com/aibuddy3529" target="_blank" rel="noreferrer">Blog</a>
          <a href="https://www.youtube.com/@yeoni_genai" target="_blank" rel="noreferrer">YouTube</a>
          <a href="https://www.instagram.com/juyeoni1503" target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <p>© 2026 KIM JU YEON. All rights reserved.</p>
      </footer>
    </main>
  );
}
