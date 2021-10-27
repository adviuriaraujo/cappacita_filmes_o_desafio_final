






//Base da URL para pegar o cartaz de um filme no TMDB. 
const imgURL = 'https://image.tmdb.org/t/p/w500'
const imgURL300 = 'https://image.tmdb.org/t/p/w300'
const myPort = 5500

const seletor = document.querySelector('h1')
//O seletor serve separar o script aplicado a cada página html dentro do mesmo script.js

//script da Home
if (seletor.id =='home'){
    const apiURL = `http://localhost:${myPort}/discover`
    const tmdbURL = "https://www.themoviedb.org/movie/"
    const main = document.getElementById('main')

    //Função para chamar a API do TMDB. Foi usado o axios no método get.
    getFilmes()
    async function getFilmes() {
          try{
            const response = await axios.get(apiURL);
          
            console.log(response)//Caso queira ver os results
            mostrarFilmes(response.data.results)
          }

    //Tratativas dos erros 400, 401, 404, 500 e uma tratativa genérica. Foram usadas imagens do https://http.cat/ para os erros porque eu gosto de gatos, apesar de ter alergia.
    //As imagens e mensagens de erro foram inseridas no mesmo formato que seriam dos filmes exibidos.
          catch(error){
            console.error(error)
            main.innerHTML = '';
            const filmeError = document.createElement('div')
            filmeError.classList.add('error')
            if(error.response.status == 400){
            filmeError.innerHTML = `
              <img src="https://http.cat/${error.response.status}" alt="Erro ${error.response.status}">
              <h3>Desculpe, ocorreu um erro! Possíveis soluções para esse erro são limpar o cache ou cookies do browser. Para saber mais, <a href="https://www.google.com/search?q=error+400+tmdb+api&oq=error+400+tmdb+api&aqs=chrome..69i57j33i22i29i30.5676j0j7&sourceid=chrome&ie=UTF-8" target="_blank">clique aqui</a></h3>
            ` 
            } else if(error.response.status == 401){
              filmeError.innerHTML = `
              <img src="https://http.cat/${error.response.status}" alt="Erro ${error.response.status}">
              <h3>Desculpe, ocorreu um erro! Por favor, confira se sua chave de API TMDB é válida. Para saber mais, <a href="https://www.google.com/search?q=error+401+tmdb+api&sxsrf=AOaemvLUzlykyhtL_3nCoqJ-O_1fWDttqA%3A1631723788221&ei=DCFCYZSBDbnZ1sQPp_m4kAM&oq=error+401+tmdb+api&gs_lcp=Cgdnd3Mtd2l6EAM6BwgAEEcQsANKBAhBGABQtpwQWNGdEGCKpBBoAXACeACAAYsBiAGLApIBAzAuMpgBAKABAcgBCMABAQ&sclient=gws-wiz&ved=0ahUKEwiUt5LmtIHzAhW5rJUCHac8DjIQ4dUDCA4&uact=5">clique aqui</a></h3>
            `
            } else if(error.response.status == 404){
              filmeError.innerHTML = `
              <img src="https://http.cat/${error.response.status}" alt="Erro ${error.response.status}">
              <h3>Desculpe, ocorreu um erro! Os recursos pedidos não foram encontrados! Por favor, tente novamente mais tarde</h3>
            `
            } else if (error.response.status == 500) {
              filmeError.innerHTML = `
              <img src="https://http.cat/${error.response.status}" alt="Erro ${error.response.status}">
              <h3>Desculpe, ocorreu um erro com nosso servidor! Por favor, tente novamente mais tarde</h3>
            `

            } else {
              filmeError.innerHTML = `
              <h3>Sinto muito, estamos com uma instabilidade no servidor! Por favor, tente novamente mais tarde</h3>
            `

            }

            main.appendChild(filmeError)
            
          }

        
    }
    
    //Função para redirecionar para as páginas de cada filme ao clicar no cartaz
  function redirect(id){      
    let mainHeader = document.getElementById('header-discover')
    mainHeader.hidden = true

    let stylesheet = document.getElementById('stylesheet')
    stylesheet.href = "styleID.css"
    getDetails(id)
    async function getDetails(id) {
      try{
        const response = await axios.get(`http://localhost:${myPort}/movie/${id}`);
      
        //console.log(response)//Caso queira ver os results
        mostrarDetalhes(response.data)
      }

//Tratativas dos erros 400, 401, 404, 500 e uma tratativa genérica. Foram usadas imagens do https://http.cat/ para os erros porque eu gosto de gatos, apesar de ter alergia.
//As imagens e mensagens de erro foram inseridas no mesmo formato que seriam dos filmes exibidos.
      catch(error){
        console.error(error)
        main.innerHTML = '';
        const filmeError = document.createElement('div')
        filmeError.classList.add('error')
        if(error.response.status == 400){
        filmeError.innerHTML = `
          <img src="https://http.cat/${error.response.status}" alt="Erro ${error.response.status}">
          <h3>Desculpe, ocorreu um erro! Possíveis soluções para esse erro são limpar o cache ou cookies do browser. Para saber mais, <a href="https://www.google.com/search?q=error+400+tmdb+api&oq=error+400+tmdb+api&aqs=chrome..69i57j33i22i29i30.5676j0j7&sourceid=chrome&ie=UTF-8" target="_blank">clique aqui</a></h3>
        ` 
        } else if(error.response.status == 401){
          filmeError.innerHTML = `
          <img src="https://http.cat/${error.response.status}" alt="Erro ${error.response.status}">
          <h3>Desculpe, ocorreu um erro! Por favor, confira se sua chave de API TMDB é válida. Para saber mais, <a href="https://www.google.com/search?q=error+401+tmdb+api&sxsrf=AOaemvLUzlykyhtL_3nCoqJ-O_1fWDttqA%3A1631723788221&ei=DCFCYZSBDbnZ1sQPp_m4kAM&oq=error+401+tmdb+api&gs_lcp=Cgdnd3Mtd2l6EAM6BwgAEEcQsANKBAhBGABQtpwQWNGdEGCKpBBoAXACeACAAYsBiAGLApIBAzAuMpgBAKABAcgBCMABAQ&sclient=gws-wiz&ved=0ahUKEwiUt5LmtIHzAhW5rJUCHac8DjIQ4dUDCA4&uact=5">clique aqui</a></h3>
        `
        } else if(error.response.status == 404){
          filmeError.innerHTML = `
          <img src="https://http.cat/${error.response.status}" alt="Erro ${error.response.status}">
          <h3>Desculpe, ocorreu um erro! Os recursos pedidos não foram encontrados! Por favor, tente novamente mais tarde</h3>
        `
        } else if (error.response.status == 500) {
          filmeError.innerHTML = `
          <img src="https://http.cat/${error.response.status}" alt="Erro ${error.response.status}">
          <h3>Desculpe, ocorreu um erro com nosso servidor! Por favor, tente novamente mais tarde</h3>
        `

        } else {
          filmeError.innerHTML = `
          <h3>Sinto muito, estamos com uma instabilidade no servidor! Por favor, tente novamente mais tarde</h3>
        `

        }

        main.appendChild(filmeError)
        
      }
    }

    function mostrarDetalhes(response) {
      main.innerHTML = '';  
                
      const filmeElem = document.createElement('div');
      filmeElem.classList.add(`filme`);
      filmeElem.innerHTML = `
        <img src="${imgURL+response.poster_path}" onclick="redirect(${response.id})" alt="${response.title}">
        <div class="filme-info">
          <h3><a href="./${response.id}.html" target="_self">${response.title}(${response.release_date.slice(0,4)})</a></h3>
          <div class="overview">
            <h5>Descrição</h5>
            ${response.overview}
          </div>
  
        </div>
  
        
      `
  
      main.appendChild(filmeElem)
      
          
    }
  }

    //Função para mostrar os filmes do TMDB dentro do main no html.
    function mostrarFilmes(response) {
      main.innerHTML = '';
      
      response.forEach(filme => {
            const {title, backdrop_path, id, release_date} = filme;
            
            
            const filmeElem = document.createElement('div');
            filmeElem.classList.add(`filme`);
            
            
            filmeElem.innerHTML = `
              <img src="${imgURL300+backdrop_path}" onclick="redirect(${id})" alt="${title}">
              <div class="filme-info">
                <p><a href='${tmdbURL}${id}' target='_blank'>${title}(${release_date.slice(0,4)})</a></p>
              </div>
            `

            main.appendChild(filmeElem)
      });
        
    }

    
}

//script da Destaques
else if (seletor.id == 'destaques'){
  
  //local com o id da lista de filmes
  const apiURL = `http://localhost:${myPort}/list/7107870`
  const main = document.getElementById('main')

  //Função para chamar a API do TMDB. Foi usado o axios no método get.
  getFilmes()
  async function getFilmes() {
        try{
          const response = await axios.get(apiURL);
          
          //console.log(response.data)//caso queira ver o data
          mostrarFilmes(response.data)
        }

  //Tratativas dos erros 400, 401, 404, 500 e uma tratativa genérica. Foram usadas imagens do https://http.cat/ para os erros porque eu gosto de gatos, apesar de ter alergia.
  //As imagens e mensagens de erro foram inseridas no mesmo formato que seriam dos filmes exibidos.
        catch(error){
            console.error(error)
            main.innerHTML = '';
            const filmeError = document.createElement('div')
            filmeError.classList.add('error')
            if(error.response.status == 400){
            filmeError.innerHTML = `
              <img src="https://http.cat/${error.response.status}" alt="Erro ${error.response.status}">
              <h3>Desculpe, ocorreu um erro! Possíveis soluções para esse erro são limpar o cache ou cookies do browser. Para saber mais, <a href="https://www.google.com/search?q=error+400+tmdb+api&oq=error+400+tmdb+api&aqs=chrome..69i57j33i22i29i30.5676j0j7&sourceid=chrome&ie=UTF-8" target="_blank">clique aqui</a></h3>
            ` 
            } else if(error.response.status == 401){
              filmeError.innerHTML = `
              <img src="https://http.cat/${error.response.status}" alt="Erro ${error.response.status}">
              <h3>Desculpe, ocorreu um erro! Por favor, confira se sua chave de API TMDB é válida. Para saber mais, <a href="https://www.google.com/search?q=error+401+tmdb+api&sxsrf=AOaemvLUzlykyhtL_3nCoqJ-O_1fWDttqA%3A1631723788221&ei=DCFCYZSBDbnZ1sQPp_m4kAM&oq=error+401+tmdb+api&gs_lcp=Cgdnd3Mtd2l6EAM6BwgAEEcQsANKBAhBGABQtpwQWNGdEGCKpBBoAXACeACAAYsBiAGLApIBAzAuMpgBAKABAcgBCMABAQ&sclient=gws-wiz&ved=0ahUKEwiUt5LmtIHzAhW5rJUCHac8DjIQ4dUDCA4&uact=5">clique aqui</a></h3>
            `
            } else if(error.response.status == 404){
              filmeError.innerHTML = `
              <img src="https://http.cat/${error.response.status}" alt="Erro ${error.response.status}">
              <h3>Desculpe, ocorreu um erro! Os recursos pedidos não foram encontrados! Por favor, tente novamente mais tarde</h3>
            `
            } else if (error.response.status == 500) {
              filmeError.innerHTML = `
              <img src="https://http.cat/${error.response.status}" alt="Erro ${error.response.status}">
              <h3>Desculpe, ocorreu um erro com nosso servidor! Por favor, tente novamente mais tarde</h3>
            `

            } else {
              filmeError.innerHTML = `
              <h3>Sinto muito, estamos com uma instabilidade no servidor! Por favor, tente novamente mais tarde</h3>
            `

            }

            main.appendChild(filmeError)
            
        }

       
  }
  
  //Função para redirecionar para as páginas de cada filme ao clicar no cartaz
  function redirect(id){
      
      const filmePage = window.location.assign(`./${id}.html`)
      return filmePage
  }



  //Função para mostrar os filmes do TMDB dentro do main no html.
  function mostrarFilmes(response) {
    main.innerHTML = '';
    
    response.forEach(filme => {
          const {title, backdrop_path, id, release_date} = filme;
          
          
          const filmeElem = document.createElement('div');
          filmeElem.classList.add(`filme`);
          
          
          filmeElem.innerHTML = `
            <img src="${imgURL300+backdrop_path}" onclick="redirect(${id})" alt="${title}">
            <div class="filme-info">
              <p><a href="./${id}.html" target="_self">${title}(${release_date.slice(0,4)})</a></p>
            </div>

            
          `

          main.appendChild(filmeElem)
    });
        
  }
}

//script da Sobre
else if(seletor.id == 'sobre'){
  
  
  comments()
  async function comments(){

    //Os comentários serão exibidos aqui
    let aside = document.getElementById('aside-comment')
    aside.innerHTML = '<h4 id="aside_h">Confira os últimos comentários:</h4>'
    
    
    let response = fetch('http://localhost:5500/exibir')
    .then(response=> response.json())
    .then((data)=> data)
    var result = await response
    
    //console.log(result)//caso queira ver o result

    
    
    //Manda os comentários para dentro do aside
    result.forEach(comentario => {
      const {nome, comment} = comentario;
      const pComment = document.createElement('p')
      pComment.setAttribute('style', 'padding-left: 1rem')  
      pComment.innerHTML = `${nome} disse: ${comment}`
        
      aside.appendChild(pComment)
    })
    
      
      
    
    
    
  }

  
}

//script das páginas de detalhe para cada filme da lista
else if (seletor.id == 'chihiro'){
  

  //Extrai só o id do filme que está na URL para a função que pega o filme
  const idFilme = 129

  //Função para chamar a API do TMDB. Foi usado o axios no método get.
  getFilme(idFilme)
  async function getFilme(id) {
    try {
      const response = await axios.get(`http://localhost:${myPort}/movie/${id}`);
      //console.log(response);//caso queira ver a response
      mostrarFilmes(response.data)
    } catch(error){
      console.error(error)
      
    }}
  
  //Função para redirecionar para as páginas de cada filme ao clicar no cartaz
  function redirect(id){      
    const filmePage = window.location.assign(`./${id}.html`)
    return filmePage
  }

  //Função para mostrar os filmes do TMDB dentro do main no html.
  function mostrarFilmes(response) {
    main.innerHTML = '';  
              
    const filmeElem = document.createElement('div');
    filmeElem.classList.add(`filme`);
    filmeElem.innerHTML = `
      <img src="${imgURL+response.poster_path}" onclick="redirect(${response.id})" alt="${response.title}">
      <div class="filme-info">
        <h3><a href="./${response.id}.html" target="_self">${response.title}(${response.release_date.slice(0,4)})</a></h3>
        <div class="overview">
          <h5>Descrição</h5>
          ${response.overview}
        </div>

      </div>

      
    `

    main.appendChild(filmeElem)
    
        
  }
}

else if (seletor.id == 'marnie'){
  

  //Extrai só o id do filme que está na URL para a função que pega o filme
  const idFilme = 242828

  //Função para chamar a API do TMDB. Foi usado o axios no método get.
  getFilme(idFilme)
  async function getFilme(id) {
    try {
      const response = await axios.get(`http://localhost:${myPort}/movie/${id}`);
      //console.log(response);//caso queira ver a response
      mostrarFilmes(response.data)
    } catch(error){
      console.error(error)
    }}
  
  //Função para redirecionar para as páginas de cada filme ao clicar no cartaz
  function redirect(id){      
    const filmePage = window.location.assign(`./${id}.html`)
    return filmePage
  }

  //Função para mostrar os filmes do TMDB dentro do main no html.
  function mostrarFilmes(response) {
    main.innerHTML = '';  
              
    const filmeElem = document.createElement('div');
    filmeElem.classList.add(`filme`);
    filmeElem.innerHTML = `
      <img src="${imgURL+response.poster_path}" onclick="redirect(${response.id})" alt="${response.title}">
      <div class="filme-info">
        <h3><a href="./${response.id}.html" target="_self">${response.title}(${response.release_date.slice(0,4)})</a></h3>
        <div class="overview">
          <h5>Descrição</h5>
          ${response.overview}
        </div>

      </div>

      
    `

    main.appendChild(filmeElem)
    
        
  }
}

else if (seletor.id == 'kiki'){
  

  //Extrai só o id do filme que está na URL para a função que pega o filme
  const idFilme = 16859

  //Função para chamar a API do TMDB. Foi usado o axios no método get.
  getFilme(idFilme)
  async function getFilme(id) {
    try {
      const response = await axios.get(`http://localhost:${myPort}/movie/${id}`);
      //console.log(response);//caso queira ver a response
      mostrarFilmes(response.data)
    } catch(error){
      console.error(error)
    }}
  
  //Função para redirecionar para as páginas de cada filme ao clicar no cartaz
  function redirect(id){      
    const filmePage = window.location.assign(`./${id}.html`)
    return filmePage
  }

  //Função para mostrar os filmes do TMDB dentro do main no html.
  function mostrarFilmes(response) {
    main.innerHTML = '';  
              
    const filmeElem = document.createElement('div');
    filmeElem.classList.add(`filme`);
    filmeElem.innerHTML = `
      <img src="${imgURL+response.poster_path}" onclick="redirect(${response.id})" alt="${response.title}">
      <div class="filme-info">
        <h3><a href="./${response.id}.html" target="_self">${response.title}(${response.release_date.slice(0,4)})</a></h3>
        <div class="overview">
          <h5>Descrição</h5>
          ${response.overview}
        </div>

      </div>

      
    `

    main.appendChild(filmeElem)
    
        
  }
}

else if (seletor.id == 'ponyo'){
  

  //Extrai só o id do filme que está na URL para a função que pega o filme
  const idFilme = 12429

  //Função para chamar a API do TMDB. Foi usado o axios no método get.
  getFilme(idFilme)
  async function getFilme(id) {
    try {
      const response = await axios.get(`http://localhost:${myPort}/movie/${id}`);
      //console.log(response);//caso queira ver a response
      mostrarFilmes(response.data)
    } catch(error){
      console.error(error)
    }}
  
  //Função para redirecionar para as páginas de cada filme ao clicar no cartaz
  function redirect(id){      
    const filmePage = window.location.assign(`./${id}.html`)
    return filmePage
  }

  //Função para mostrar os filmes do TMDB dentro do main no html.
  function mostrarFilmes(response) {
    main.innerHTML = '';  
              
    const filmeElem = document.createElement('div');
    filmeElem.classList.add(`filme`);
    filmeElem.innerHTML = `
      <img src="${imgURL+response.poster_path}" onclick="redirect(${response.id})" alt="${response.title}">
      <div class="filme-info">
        <h3><a href="./${response.id}.html" target="_self">${response.title}(${response.release_date.slice(0,4)})</a></h3>
        <div class="overview">
          <h5>Descrição</h5>
          ${response.overview}
        </div>

      </div>

      
    `

    main.appendChild(filmeElem)
    
        
  }
}


//Função para enviar comentários
async function enviar(){
                    
  //Recupera os valores dos campos do formulário
  let nome = document.getElementById('nome').value
  let comment = document.getElementById('comment').value

  //Realiza uma requisição assíncrona com método post, envia um json no body, ativa cross-origin
  let response = fetch(`http://localhost:${myPort}/submit`,
      {
        method:'post',
        body:JSON.stringify(
          {
            nome,
            comment
          }
        ),
        mode: 'cors',
        //Nos headers, foram permitidos todas as origens e métodos, apenas para facilitar os fins do desafio. Não seria uma prática recomendada para um aplicativo público.
        headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Max-Age': 86400
        
        }
      }
  )
  .then(response=> response.json())
  .then((data)=> data)
  
  //Recarrega a página e alerta que o comentário foi postado
  confirmar()
  function confirmar(){
  alert('Agradeço por deixar seu comentário!')
  window.location.href= './sobre.html'                
  }
}



                
            



