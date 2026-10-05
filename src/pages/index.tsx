import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const documentGroups = [
  {number: '01', title: 'Hiểu bài toán', description: 'Bối cảnh, vấn đề cốt lõi và các persona mà sản phẩm cần phục vụ.', to: '/docs/business-analysis/context-and-problem'},
  {number: '02', title: 'Xác định phạm vi', description: 'Đầu vào, đầu ra MVP, tác nhân và trách nhiệm trong quy trình.', to: '/docs/business-analysis/scope-and-actors'},
  {number: '03', title: 'Thiết kế quy trình', description: 'Luồng nghiệp vụ từ tải bản vẽ đến kiểm tra và dựng mô hình 3D.', to: '/docs/business-analysis/business-workflow'},
  {number: '04', title: 'Đánh giá kết quả', description: 'Tiêu chí nghiệm thu, chỉ số hiệu quả và các điểm cần xác thực.', to: '/docs/business-analysis/acceptance-and-metrics'},
];

function HousePreview(): ReactNode {
  return (
    <div className={styles.preview} aria-label="Minh họa chuyển mặt bằng 2D thành mô hình 3D">
      <div className={styles.previewTopbar}><span /><span /><span /><strong>HOUSE GRAPH / 01</strong></div>
      <div className={styles.canvas}>
        <div className={styles.plan}>
          <span className={styles.roomA}>LIVING</span><span className={styles.roomB}>BED</span>
          <span className={styles.roomC}>KITCHEN</span><span className={styles.dimension}>8.40 m</span>
        </div>
        <div className={styles.scanLine} />
        <div className={styles.statusCard}>
          <span className={styles.statusDot} />
          <div><small>TRẠNG THÁI</small><strong>Sẵn sàng dựng</strong></div><b>92%</b>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Tài liệu sản phẩm" description="Tài liệu phân tích nghiệp vụ cho AI House Design Workspace — chuyển bản vẽ mặt bằng 2D thành mô hình nhà ở 3D có cấu trúc.">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}><span>AI HOUSE</span><span className={styles.eyebrowLine} /><span>PRODUCT DOCUMENTATION</span></div>
              <Heading as="h1">Từ mặt bằng 2D<br />đến <em>không gian 3D.</em></Heading>
              <p>Nơi tập hợp bối cảnh, persona, quy trình và yêu cầu nghiệp vụ cho hệ thống tái tạo mô hình nhà ở có cấu trúc từ bản vẽ.</p>
              <div className={styles.actions}>
                <Link className={styles.primaryAction} to="/business-analysis">Khám phá tài liệu <span>→</span></Link>
                <Link className={styles.secondaryAction} to="/docs/business-analysis/personas">Xem persona</Link>
              </div>
              <div className={styles.meta}>
                <span><b>10</b> nhóm nội dung</span><span><b>MVP</b> phạm vi hiện tại</span><span><b>0.1</b> phiên bản đề xuất</span>
              </div>
            </div>
            <HousePreview />
          </div>
        </section>

        <section className={styles.process}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <div><span className={styles.kicker}>LUỒNG SẢN PHẨM</span><Heading as="h2">Một nguồn dữ liệu, hai cách nhìn.</Heading></div>
              <p>Mô hình 2D và 3D luôn phản ánh cùng một trạng thái đã được kiểm tra.</p>
            </div>
            <div className={styles.steps}>
              {['Tải bản vẽ', 'Xác nhận tỷ lệ', 'Kiểm tra cấu trúc', 'Dựng mô hình 3D'].map((step, index) => (
                <div className={styles.step} key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < 3 && <i>→</i>}</div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.documents}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <div><span className={styles.kicker}>BẮT ĐẦU TỪ ĐÂY</span><Heading as="h2">Đi thẳng đến phần bạn cần.</Heading></div>
              <Link className={styles.allDocs} to="/business-analysis">Xem toàn bộ tài liệu →</Link>
            </div>
            <div className={styles.cardGrid}>
              {documentGroups.map((group) => (
                <Link className={styles.card} to={group.to} key={group.number}>
                  <span>{group.number}</span><Heading as="h3">{group.title}</Heading><p>{group.description}</p><b>Đọc nội dung <i>↗</i></b>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.callout}>
          <div className={`container ${styles.calloutInner}`}>
            <span className={styles.calloutMark}>⌁</span>
            <div><span className={styles.kicker}>NGUYÊN TẮC CỐT LÕI</span><Heading as="h2">AI đề xuất. Con người xác nhận.</Heading><p>Mọi dữ liệu nhận diện, mặc định và do người dùng cung cấp đều có nguồn gốc và trạng thái rõ ràng.</p></div>
            <Link className={styles.primaryAction} to="/docs/business-analysis/business-rules">Xem quy tắc <span>→</span></Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
