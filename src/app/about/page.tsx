import { Paragraph } from "@/components/about";
import { SocialMediaCard, Title } from "@/components/shared";
import { socialMediaConfig } from "@/configs";

export default async function About() {
  return (
    <>
      <div className="flex w-full animate-fade-up flex-col">
        <Title title="Tentang Saya" />

        <div className="my-5 flex flex-col gap-5">
          <Paragraph>
            Nama saya Azra Muhammad Bhaskarogra. Biasa dipanggil Azra atau
            Bhaska. Saat ini sedang menempuh pendidikan di Universitas
            Diponegoro dengan disiplin ilmu Informatika.
          </Paragraph>

          <Paragraph>
            Diluar kuliah dan pekerjaan, saya memiliki hobi bermain bulutangkis,
            permesinan, robotik, dan mengikuti perkembangan teknologi.
          </Paragraph>

          <Paragraph>
            Saya juga anggota himpunan mahasiswa pada jurusan saya dan sebagai
            salah satu pemrogram di unit kegiatan mahasiswa robotik bidang
            drone.
          </Paragraph>

          <Paragraph>
            Sebagai mahasiswa Informatika pastinya dituntut untuk bisa semua hal
            mengenai <i>software engineering process</i>. Selain saya menyukai
            proses teknis, saya juga menyukai proses desain tampilan antarmuka
            dan pengalaman pengguna.
          </Paragraph>
        </div>

        <div className="my-5 flex flex-wrap gap-4">
          {socialMediaConfig.map((item) => (
            <SocialMediaCard
              key={item.id}
              path={item.path}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}
