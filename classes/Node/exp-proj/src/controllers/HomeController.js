const HomeModel = require('../models/HomeModel');

module.exports = {
  async index(request, response) {
    return response.render('index');
    /* Coloque next(); caso haja outro middleware após esse controller */
  },

  async store(request, response) {
    const { title, description } = request.body;
    
    try {
      const data = await HomeModel.create({
        title,
        description,
      });

      return response.status(201).send(data);

    } catch (err) {
      return response.status(400).send('Error on creation: ' + err);
    }
    
    /* Coloque next(); caso haja outro middleware após esse controller */
  }
};