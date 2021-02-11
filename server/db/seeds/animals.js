
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        {id: 1, name: 'Elephant', url: "http://avante.biz/wp-content/uploads/Elephant-Wallpapers/Elephant-Wallpapers-001.jpg"},
        {id: 2, name: 'Lion', url: "https://i.redd.it/cdxg0rjjcnf51.jpg"},
        {id: 3, name: '10 Sea otters', url: "https://mcdn.wallpapersafari.com/medium/4/68/l8qjhB.jpg"},
        {id: 4, name: 'Duckling', url: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/05/29/11/duckling.jpg"},
        {id: 5, name: 'Orca', url: "https://wallpapercave.com/wp/HHpfkqs.jpg"},
        {id: 6, name: 'Moa', url: "https://www.newshub.co.nz/home/world/2019/06/ancient-bird-twice-the-size-of-the-moa-found-in-crimea/_jcr_content/par/brightcovevideo/image.dynimg.1280.q75.jpg/v1561661218187/v2-Andrey-Atuchin-Pachystruthio-dmanisensis-bird-1120.jpg"},
        {id: 7, name: 'Velociraptor', url: "https://wallpaperaccess.com/full/1235235.jpg"},
        {id: 8, name: '10000 Ants', url: "https://ak.picdn.net/shutterstock/videos/3228187/thumb/1.jpg"},
        {id: 9, name: 'Eagle', url: "https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_bald_eagle.jpg"},
        {id: 10, name: 'Gorilla', url: "https://i.pinimg.com/originals/72/61/4d/72614d36fe338eddb09f24ed90bb92c6.jpg"}
      ]);
    });
};
