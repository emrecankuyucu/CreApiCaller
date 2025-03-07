const Creatomate=require('creatomate')
const client=new Creatomate.Client("")
client.render({
    template_id: "fc777f71-7baa-4c96-a1ed-4170bdc70045",
    modifications: {
      "Background.source": "https://cdn.leonardo.ai/users/83e4acd4-6342-437b-b84f-e097be0e9090/generations/8275c2d6-9da6-44b8-8298-92d7b5c33686/Leonardo_Phoenix_10_In_a_world_where_time_is_currency_a_young_0.jpg",
      "Text-1.text.name": "",
      "Text-2.text": "This is just an example template",
      "Text-3.text": "Used in the quick start guide",
      "Text-4.text": "creatomate.com/docs"
    }
    
}).then((renders)=>{
    console.log('Completed',renders);
})
