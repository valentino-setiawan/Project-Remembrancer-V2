# Tugas website

Repo pengumpulan tugas website iTEC. Kamu bisa melihat kumpulan website disini:

[https://itecmetschoo.github.io/tugas-website](https://itecmetschoo.github.io/tugas-website)

## Cara pengumpulan

ada dua nih cara pengumpulan tugasnya. Cara 1 itu kalau kamu mau source code kamu ditaroh di repo ini, dan cara 2 itu kalau kamu sudah punya source code websitenya di repo GitHub kamu sendiri.

### Cara 1
Pertama pastikan kamu punya akun GitHub. [fork repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
ini, lalu lakukan `git clone` supaya repo bisa dikerjakan secara lokal. URL untuk git clone bisa ditemukan di tombol hijau yang bertuliskan "Code" di atas fork kamu.

Kedua, buat sebuah folder sesuai dengan nama yang ingin kamu tampilkan di website pengumpulan: `itecmetschoo.github.io/tugas-website/[nama-kamu]/`. Misalkan, kamu
ingin menggunakan nickname kamu, `klrfl`, maka buatlah folder bernama `klrfl` dan masukkan paling tidak satu file html bernama `index.html` di dalamnya. Setelah
membuat folder, kerjakanlah website sampai selesai.

Ketiga, jika sudah puas dengan website kamu, lakukan push ke repo fork kamu:

```bash
git push -u origin main
```

Lalu sebuah banner akan muncul yang mengajak kamu untuk membuat sebuah pull request. Klik dan isi pull request kamu dengan deskripsi sebagai berikut:

`mengumpulkan tugas website atas nama [nama asli kamu]`

Jika pull request yang kamu buat sudah diverifikasi, maka selamat, perubahanmu akan terlihat di GitHub!

### Cara 2
[tutorial](https://www.howtogeek.com/devops/how-to-set-up-a-simple-free-website-with-github-pages/)

Nah cara 2 ini mengasumsikan kamu sudah punya repo sendiri, dan juga dihosting di GitHub Pages. Kalau sudah dihosting, salin pranala websitenya terus langsung aja ke bagian mengumpulkan website kamu. kalau belum dihosting, ikuti langkah-langkah berikut:

#### Github Pages
- masuk ke pengaturan repo kamu, gulir ke bawah ke bagian "Pages"
- pilih branch utama projek kamu. Hampir semua orang pakenya `main`
- klik save, terus tunggu beberapa saat supaya GitHub bisa mendeploy website kamu.
kalau sudah berhasil, linknya disalin terus disimpan ya.

#### Mengumpulkan website kamu

Pertama, fork repo ini, kemudian tambahkan link halaman GitHub Pages kamu di dalam file `index.html`. kalau sudah di-commit dan sikronisasi dengan `git push`, buatlah sebuah pull request, dan tunggu sampai pull request kamu diterima.