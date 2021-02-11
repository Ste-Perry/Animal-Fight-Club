
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        {id: 1, name: 'Elephant', url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F541417186444088746%2F&psig=AOvVaw2FDcwDClSyXbJ5I2H0yfPC&ust=1613101341165000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCFvPb04O4CFQAAAAAdAAAAABAS"},
        {id: 2, name: 'Lion', url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2FCallMeCarson%2Fcomments%2Fi5maoy%2Fbig_lion_hd%2F&psig=AOvVaw0e1a0FNLp-VsTCWBj3RKIO&ust=1613101430315000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCND7yqH14O4CFQAAAAAdAAAAABAP"},
        {id: 3, name: '10 Sea otters', url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapersafari.com%2Fw%2Fl8qjhB&psig=AOvVaw1DIHtleVGpuYQPmmbjrHhD&ust=1613101501764000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjK2eb14O4CFQAAAAAdAAAAABAJ"},
        {id: 4, name: 'Duckling', url: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/05/29/11/duckling.jpg"},
        {id: 5, name: 'Orca', url: "https://static.wikia.nocookie.net/river-monsters/images/d/dd/Resident_orca.png/revision/latest?cb=20190429070329"},
        {id: 6, name: 'Moa', url: "https://www.newshub.co.nz/home/world/2019/06/ancient-bird-twice-the-size-of-the-moa-found-in-crimea/_jcr_content/par/brightcovevideo/image.dynimg.1280.q75.jpg/v1561661218187/v2-Andrey-Atuchin-Pachystruthio-dmanisensis-bird-1120.jpg"},
        {id: 7, name: 'Velociraptor', url: "https://static.wikia.nocookie.net/jurassicpark/images/b/b8/Velociraptor-info-graphic.png/revision/latest?cb=20150420212958"},
        {id: 8, name: '10000 Ants', url: "https://ak.picdn.net/shutterstock/videos/3228187/thumb/1.jpg"},
        {id: 9, name: 'Eagle', url: "https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_bald_eagle.jpg"},
        {id: 10, name: 'Gorilla', url: "https://i.pinimg.com/originals/72/61/4d/72614d36fe338eddb09f24ed90bb92c6.jpg"}
      ]);
    });
};
