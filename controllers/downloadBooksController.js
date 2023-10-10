class DownloadBooksController {
  async get(req, res, next) {
    res.download("./public/books.html", "test_delete_me.html", (err) => {
      console.log("File sent");
    });
  }
}

module.exports = new DownloadBooksController();
