exports.index = (req, res) => {
    const bookList = [
        {id: 1,
     judul: 'Belajar JavaScript',
     penulis: 'Rina', 
     tahun: 2024},
    {id: 2,
     judul: 'Dasar Pembuatan Web',
     penulis: 'Budi', 
     tahun: 2023},
    {id: 3,
     judul: 'Mengenal Node.js',
     penulis: 'Sari', 
     tahun: 2025}
    ];

    res.render('books/index', {
        pageTitle: 'Daftar Buku Perpustakaan',
        bookList: bookList
    });
};