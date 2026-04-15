import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },

  // ─── PENGATURAN SITUS (SINGLETONS) ──────────────────────────────────────

  singletons: {
    // --- Pengaturan Umum: Nama Sekolah & Logo ---
    site: singleton({
      label: "Umum (Nama & Logo)",
      path: "src/data/site",
      format: { data: "json" },
      schema: {
        name: fields.text({
          label: "Nama Sekolah",
          description: "Tampil di navbar dan judul browser",
        }),
        tagline: fields.text({
          label: "Tagline",
          description: "Kalimat singkat identitas sekolah",
        }),
        logo: fields.image({
          label: "Logo Sekolah",
          description: "Upload logo PNG/JPG. Rekomendasi ukuran: 200x200px",
          directory: "public",
          publicPath: "/",
        }),
        description: fields.text({
          label: "Deskripsi SEO",
          description: "Teks yang muncul di hasil pencarian Google",
          multiline: true,
        }),
        og_image: fields.image({
          label: "Gambar Share (OG Image)",
          description: "Gambar saat link dibagikan ke media sosial",
          directory: "public/images",
          publicPath: "/images/",
          validation: { isRequired: false },
        }),
      },
    }),

    // --- Hero / Banner Utama ---
    hero: singleton({
      label: "Hero / Banner Halaman Utama",
      path: "src/data/hero",
      format: { data: "json" },
      schema: {
        title: fields.text({
          label: "Judul Utama",
          description: "Teks besar di bagian atas halaman",
        }),
        subtitle: fields.text({
          label: "Subtitle / Tagline",
          description: "Kalimat penjelasan di bawah judul",
          multiline: true,
        }),
        cta_text: fields.text({
          label: "Teks Tombol",
          description: "Label tombol CTA, contoh: Daftar PPDB Sekarang",
        }),
        cta_url: fields.text({
          label: "Link Tombol",
          description: "URL tujuan tombol, contoh: /ppdb",
        }),
      },
    }),

    // --- Footer ---
    footer: singleton({
      label: "Footer",
      path: "src/data/footer",
      format: { data: "json" },
      schema: {
        about: fields.text({
          label: "Teks Tentang Sekolah",
          multiline: true,
        }),
        address: fields.text({
          label: "Alamat",
          multiline: true,
        }),
        email: fields.text({ label: "Email" }),
        phone: fields.text({
          label: "Nomor Telepon",
          description: "Contoh: 0818 0840 2439 / 0851 7172 5259",
        }),
        copyright: fields.text({
          label: "Nama Hak Cipta (Copyright)",
          description: "Contoh: SMK Bina Mandiri Kutabumi Tangerang",
        }),
      },
    }),

    // --- Halaman Beranda ---
    homepage: singleton({
      label: "Halaman Beranda",
      path: "src/data/homepage",
      format: { data: "json" },
      schema: {
        about_title: fields.text({ label: "Judul Bagian Tentang Sekolah" }),
        about_text: fields.text({
          label: "Teks Tentang Sekolah",
          multiline: true,
        }),
        school_image: fields.image({
          label: "Foto Gedung / Sekolah",
          directory: "public",
          publicPath: "/",
        }),
        programs_title: fields.text({ label: "Judul Program Unggulan" }),
        programs: fields.array(
          fields.object({
            title: fields.text({ label: "Nama Program" }),
            description: fields.text({
              label: "Deskripsi",
              multiline: true,
            }),
          }),
          {
            label: "Program Unggulan",
            itemLabel: (props) => props.fields.title.value,
          }
        ),
        ppdb_title: fields.text({ label: "Judul CTA PPDB" }),
        ppdb_subtitle: fields.text({
          label: "Subtitle CTA PPDB",
          multiline: true,
        }),
        ppdb_wa: fields.text({
          label: "Nomor WhatsApp PPDB",
          description: "Tanpa + atau spasi. Contoh: 6285312261634",
        }),
        ppdb_button_text: fields.text({ label: "Teks Tombol PPDB" }),
      },
    }),

    // --- Halaman Profil Sekolah ---
    profil: singleton({
      label: "Halaman Profil Sekolah",
      path: "src/data/profil",
      format: { data: "json" },
      schema: {
        intro1: fields.text({
          label: "Paragraf Perkenalan 1",
          multiline: true,
        }),
        intro2: fields.text({
          label: "Paragraf Perkenalan 2",
          multiline: true,
        }),
        npsn: fields.text({ label: "NPSN" }),
        status: fields.text({
          label: "Status Sekolah",
          description: "Contoh: Swasta / Negeri",
        }),
        akreditasi: fields.text({
          label: "Akreditasi",
          description: "Contoh: A / B / C",
        }),
        tahun_berdiri: fields.text({ label: "Tahun Berdiri" }),
        kepala_sekolah_foto: fields.image({
          label: "Foto Kepala Sekolah",
          directory: "public/images",
          publicPath: "/images/",
        }),
        kepala_sekolah_nama: fields.text({ label: "Nama Kepala Sekolah" }),
        sambutan: fields.text({
          label: "Sambutan Kepala Sekolah",
          description: "Pisahkan paragraf dengan baris kosong",
          multiline: true,
        }),
        visi: fields.text({
          label: "Visi Sekolah",
          multiline: true,
        }),
        misi: fields.array(
          fields.text({ label: "Poin Misi" }),
          {
            label: "Misi Sekolah",
            itemLabel: (props) => props.value,
          }
        ),
      },
    }),

    // --- Halaman PPDB ---
    ppdb: singleton({
      label: "Halaman PPDB",
      path: "src/data/ppdb",
      format: { data: "json" },
      schema: {
        title: fields.text({ label: "Judul Halaman" }),
        tahun_ajaran: fields.text({
          label: "Tahun Ajaran",
          description: "Contoh: 2025 / 2026",
        }),
        subtitle: fields.text({
          label: "Subtitle / Deskripsi",
          multiline: true,
        }),
        highlights: fields.array(
          fields.object({
            icon: fields.text({
              label: "Ikon (emoji)",
              description: "Tempel emoji, contoh: 🎓",
            }),
            title: fields.text({ label: "Judul" }),
            desc: fields.text({ label: "Deskripsi Singkat" }),
          }),
          {
            label: "Keunggulan Sekolah",
            itemLabel: (props) => props.fields.title.value,
          }
        ),
        alur: fields.array(
          fields.text({ label: "Langkah" }),
          {
            label: "Alur Pendaftaran",
            itemLabel: (props) => props.value,
          }
        ),
        wa_number: fields.text({
          label: "Nomor WhatsApp",
          description: "Tanpa + atau spasi. Contoh: 6285171725259",
        }),
        button_text: fields.text({ label: "Teks Tombol Daftar" }),
      },
    }),
  },

  // ─── BERITA (COLLECTION) ─────────────────────────────────────────────────

  collections: {
    berita: collection({
      label: "Berita Sekolah",
      slugField: "title",
      path: "src/content/berita/*",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({
          name: {
            label: "Judul Berita",
            validation: { isRequired: true },
          },
        }),
        description: fields.text({
          label: "Deskripsi Singkat",
          description: "Ringkasan berita, tampil di daftar berita",
          multiline: true,
          validation: { isRequired: true },
        }),
        date: fields.date({
          label: "Tanggal Terbit",
          validation: { isRequired: true },
        }),
        author: fields.text({
          label: "Penulis",
          defaultValue: "Admin Sekolah",
        }),
        image: fields.image({
          label: "Gambar Utama",
          description: "Gambar thumbnail berita",
          directory: "public/uploads",
          publicPath: "/uploads/",
          validation: { isRequired: false },
        }),
        body: fields.markdoc({
          label: "Isi Berita",
          description: "Tulis isi berita dengan format Markdown",
        }),
      },
    }),
  },
});
