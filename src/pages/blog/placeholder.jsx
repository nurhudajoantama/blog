import React from "react";
import { Link } from "gatsby";
import Header from "../../components/header/Header";
import ContentContainerLayout from "../../components/layout/ContentContainerLayout";
import BodyLayout from "../../components/layout/BodyLayout";
import Footer from "../../components/footer/Footer";

export default function placeholder() {
  return (
    <div>
      <BodyLayout>
        <Header />
        <div className="mx-auto max-w-screen-md text-gray-500 mt-8 text-sm">
          <Link to="/" className="hover:text-blue-500">
            Nurhuda Joantama
          </Link>{" "}
          /{" "}
          <Link to="/blog" className="hover:text-blue-500">
            blog
          </Link>{" "}
          /{" "}
          <Link to="/blog" className="hover:text-blue-500">
            judul-blog
          </Link>
        </div>
        <div className="mb-10 mt-5">
          <ContentContainerLayout>
            <div className="mb-5 font-semibold text-3xl text-center tracking-wider">Judul Blog</div>
            <div className="m-5 pt-4">
              {/* thumbnail */}
              <img src="/assets/screenshot-271-.png" alt="tes" className="w-full h-auto mb-10" />
              <p className="text-lg leading-relaxed tracking-wide my-7">Lorem ipsum dolor sit.!</p>
              <p className="text-lg leading-relaxed tracking-wide my-7">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis numquam nesciunt maiores, perferendis atque excepturi iusto, dicta similique ipsam officia? Nobis
                similique doloremque reiciendis consequatur nostrum minima expedita assumenda optio dignissimos nam! Quidem quas vero eos rem tenetur cupiditate omnis, nemo voluptatibus nobis odio.!
              </p>
              <p className="text-lg leading-relaxed tracking-wide my-7">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium sint illum cum? Eaque labore, reiciendis dolorum voluptatibus fuga iure dolorem hic natus reprehenderit inventore
                consequuntur explicabo cum, mollitia, similique modi doloremque fugiat voluptates temporibus fugit atque ad maiores officiis accusantium! Neque, eveniet vitae, eos quos similique
                nulla, tempore ipsa voluptatem non praesentium possimus accusantium delectus minima sequi architecto quis inventore.!
              </p>
              <p className="text-lg leading-relaxed tracking-wide my-7">hello!</p>
              <img src="/assets/screenshot-271-.png" alt="tes" className="w-full h-auto my-7" />
              <p className="text-lg  leading-relaxed tracking-wide my-7">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil amet excepturi quam ut eveniet, dolores veritatis tenetur earum, laboriosam, tempore sequi eius. Iusto temporibus,
                minima explicabo totam expedita architecto fugit animi neque est ex ratione corporis modi atque deleniti praesentium veritatis quisquam! Error impedit culpa veritatis mollitia dolor
                ipsa incidunt maiores asperiores aspernatur? Iste id nesciunt dolores vitae provident aperiam error repellat sunt eius voluptates ab, autem dolorem non laboriosam veniam nulla. Numquam
                rem, quod maiores laudantium sapiente exercitationem odio tempora minima deleniti eius. Eligendi iure repellendus excepturi optio maxime laborum aperiam sapiente, reprehenderit minus
                vitae neque quibusdam modi soluta explicabo, asperiores eos? Veritatis ratione vel excepturi iusto reprehenderit tenetur eligendi beatae assumenda mollitia sunt doloremque voluptatibus
                <br />
                laborum, expedita aliquid asperiores vero hic velit non perferendis error facilis neque similique fugit. Debitis unde rerum, aspernatur pariatur ex porro ullam, omnis quia expedita,
                quisquam sequi exercitationem reprehenderit ipsum molestiae soluta ad. Doloribus natus exercitationem molestias maiores officia assumenda placeat culpa beatae commodi non enim nam,
                eveniet similique voluptas quos voluptatibus dolor veniam? Quos ut nemo minima accusantium illo mollitia maiores modi laboriosam veritatis libero quaerat sit, enim quidem fugiat
                similique blanditiis dolore id. Perferendis repellat repellendus incidunt nostrum, maxime adipisci error explicabo perspiciatis reprehenderit ad, alias ea hic minima provident non
                magnam officia temporibus, at numquam quasi! Saepe nobis cupiditate aut omnis quia ipsum maiores. Fugiat nihil laborum error architecto dolores expedita numquam. Deleniti tempora
                consequuntur laborum tempore rerum, quos ducimus omnis nulla, amet sapiente placeat, quae hic consectetur eius perferendis dolorum incidunt voluptatibus iusto autem? Temporibus omnis
                mollitia quis vero perferendis, quasi officia, molestiae quas labore incidunt sint. Quia unde, voluptates doloremque inventore fugiat rem quis ullam possimus reprehenderit, itaque quam
                reiciendis natus? Veniam, recusandae illo? Perspiciatis autem tempore inventore, <code className="py-1 px-2 rounded bg-gray-200">print(test)</code> distinctio hic excepturi ea saepe,
                modi illo eaque architecto quidem! hello
              </p>
              <pre className="bg-gray-200 py-3 pl-5 pr-3 shadow-sm rounded language-jsx">
                console.log(blabla)
                <br />
                blabla
              </pre>
            </div>
          </ContentContainerLayout>
        </div>
        <Footer />
      </BodyLayout>
    </div>
  );
}
