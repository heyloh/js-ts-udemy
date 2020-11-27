module.exports = {
  async index(request, response) {
    return response.json('Rota de listagem.');
  },

  async store(request, response) {
    return response.json('Rota de criação.')
  }
};