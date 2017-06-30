var data = {
  //points of interests (markers in the map component)
  points: [
    {
      iconPath: "/resources/poi.png", //image file path of the icon for the POI (marker)
      id: 0,                          //id of the POI
      latitude: 37.2717305883,        //coordinates
      longitude: -76.7134094238,
      width: 32,                      //size of the icon
      height: 32,
      anchor: { x: 0.5, y: 1 },       //postion of the anchor point of the icon (0 <= x, y <= 1)
      title: "College of William & Mary", //title of the POI
      imageUrl: "http://www.wm.edu/offices/hr/_widgets/wren_building/wren1.jpg" //additional attribute, for displaying a photo in the "poi" page
    },
    {
      iconPath: "/resources/shopping.png",
      id: 1,
      latitude: 37.2715086075,
      longitude: -76.7066717148,
      width: 32,
      height: 32,
      anchor: { x: 0.5, y: 0.5 },
      title: "Colonial Williamsburg's Merchants Square",
      imageUrl: "http://www.merchantssquare.org/images/map/map_merchants_square.gif"
    },
    {
      iconPath: "/resources/poi.png",
      id: 2,
      latitude: 37.2713207770,
      longitude: -76.7002344131,
      width: 32,
      height: 32,
      anchor: { x: 0.5, y: 1 },
      title: "Williamsburg Historic Distric",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Bruton_Church%2C_Williamsburg.JPG"
    },
    {
      iconPath: "/resources/poi.png",
      id: 3,
      latitude: 37.2765457035,
      longitude: -76.7086887360,
      width: 32,
      height: 32,
      anchor: { x: 0.5, y: 1 },
      title: "Williamsburg Transportation Center",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/02/Williamsburg_depot.jpg"
    },
    {
      iconPath: "/resources/museum.png",
      id: 4,
      latitude: 37.2740613474,
      longitude: -76.7020690441,
      width: 32,
      height: 32,
      anchor: { x: 0.5, y: 0.5 },
      title: "Governor's Palace",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Colonial_Williamsburg_Governor%27s_Palace_Main_Building.JPG/1024px-Colonial_Williamsburg_Governor%27s_Palace_Main_Building.JPG"
    },
    {
      iconPath: "/resources/poi.png",
      id: 5,
      latitude: 37.2769896348,
      longitude: -76.7014360428,
      width: 32,
      height: 32,
      anchor: { x: 0.5, y: 1 },
      title: "Great Hopes Plantation",
      imageUrl: "http://www.history.org/Almanack/places/hb/images/444178-1_lg.jpg"
    },
    {
      iconPath: "/resources/info.png",
      id: 6,
      latitude: 37.2792433994,
      longitude: -76.6986894608,
      width: 32,
      height: 32,
      anchor: { x: 0.5, y: 0.5 },
      title: "Colonial Williamsburg Visitor Center",
      imageUrl: "https://res.cloudinary.com/colonialwilliamsburg/image/upload/ar_3:2,c_fill,w_600,q_auto:eco,g_auto:faces/buildings/vc-front.jpg"
    },
    {
      iconPath: "/resources/shopping.png",
      id: 7,
      latitude: 37.2806092845,
      longitude: -76.7205333710,
      width: 32,
      height: 32,
      anchor: { x: 0.5, y: 0.5 },
      title: "Williamsburg Shopping Center",
      imageUrl: "http://cdn.visitwilliamsburg.com/sites/default/master/files/styles/3_2_x-large/public/profiles/photos/logo/listing_3069--6475.jpg?itok=dkSx7Y2p"
    }
  ]
}

//expose the data 
module.exports.data = data
module.exports.points = data.points
