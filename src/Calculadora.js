

class Calculadora {
  async somar(request, response) {
    const num_1 = Number(request.query.num_1);
    const num_2 = Number(request.query.num_2);

    return response.status(200).json({
      num_1, 
      num_2, 
      resposta: num_1 + num_2,
    });
  }


  async subtrair(request, response) {
    const num_1 = Number(request.query.num_1);
    const num_2 = Number(request.query.num_2);

    return response.status(200).json({
      num_1, 
      num_2, 
      resposta: num_1 - num_2,
    });
  }


  async multiplicar(request, response) {
    const num_1 = Number(request.query.num_1);
    const num_2 = Number(request.query.num_2);

    return response.status(200).json({
      num_1, 
      num_2, 
      resposta: num_1 * num_2,
    });
  }


  async dividir(request, response) {
    const num_1 = Number(request.query.num_1);
    const num_2 = Number(request.query.num_2);

    return response.status(200).json({
      num_1, 
      num_2, 
      resposta: num_1 / num_2,
    });
  }


  async sqrt(request, response) {
    const num_1 = Number(request.query.num_1);

    return response.status(200).json({
      num_1, 
      resposta: Math.sqrt(num_1),
    });
  }


  async pow(request, response) {
    const num_1 = Number(request.query.num_1);
    const num_2 = Number(request.query.num_2);

    return response.status(200).json({
      num_1, 
      num_2,
      resposta: Math.pow(num_1, num_2),
    });
  }


  async sen(request, response) {
    const num_1 = Number(request.query.num_1); // Em radiano

    return response.status(200).json({
      num_1,
      resposta: Math.sin(num_1),
    });
  }


  async cos(request, response) {
    const num_1 = Number(request.query.num_1); // Em radiano

    return response.status(200).json({
      num_1,
      resposta: Math.cos(num_1),
    });
  }


  async tg(request, response) {
    const num_1 = Number(request.query.num_1); // Em radiano

    return response.status(200).json({
      num_1,
      resposta: Math.tan(num_1),
    });
  }
}

export { Calculadora };
