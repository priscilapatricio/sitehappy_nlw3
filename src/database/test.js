const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        
            id: 1,
            lat: "-27.2215144",
            lng: "-49.6594246",
            name: "Lar dos meninos",
            about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            whatsapp: 'telefone',
            images: [
                "https://images.unsplash.com/photo-1595299462600-f1f42d4fae6f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    
                "https://images.unsplash.com/photo-1595295410103-402cb7cb0254?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),
            instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            opening_hours: "Horário de visitas Das 18h até 8h",
            open_on_weekends: "0"        
        
    })

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")  
    console.log(selectedOrphanages)  

    // consultar somente um orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id="2"')
    console.log(orphanage)

    // deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id='2'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id='5'"))

})