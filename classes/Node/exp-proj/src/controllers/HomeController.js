module.exports = {
  async index(request, response) {
    return response.render('index');
  },

  async store(request, response) {
    return response.json('Rota de criação.')
  }
};