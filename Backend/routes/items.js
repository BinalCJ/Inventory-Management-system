const router = require("express").Router();
let Item = require("../models/Item");

http://Localhost:3000/item/add
router.route("/add").post((req,res) => {

    const productID = req.body.productID;
    const itemName = req.body.itemName;
    const itemDescription = req.body.itemDescription;
    const quantity = Number(req.body.quantity);
    const vendorName = req.body.vendorName;
    const expiryDate = req.body.expiryDate;
    const addedDate = req.body.addedDate;

    const newItem = new Item({

        productID,
        itemName,
        itemDescription,
        quantity,
        vendorName,
        expiryDate,
        addedDate

    })

    newItem.save().then(() => {
        res.json("Item Added")
    }).catch((err) => {
        console.log(err);
    })

})

http://Localhost:3000/item
router.route("/").get((req,res) => {

    Item.find().then((items) => {
        res.json(items)
    }).catch((err) => {
        console.log(err)
    })

})  

http://Localhost:3000/item/update/
router.route("/update/:id").put(async (req, res) => {
    let itemId = req.params.id;
    const { productID, itemName, itemDescription, quantity, vendorName, expiryDate, addedDate } = req.body;

    const updateItem = { 
        productID,
        itemName,
        itemDescription,
        quantity,
        vendorName,
        expiryDate,
        addedDate
    }

    const update = await Item.findByIdAndUpdate(itemId, updateItem).then(()=> {
        res.status(200).send({status: "Item updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
    
})
http://Localhost:3000/item/delete/:id
router.route("/delete/:id").delete(async (req, res) => {
    let itemId = req.params.id;

    await Item.findByIdAndDelete(itemId).then(() => {
        res.status(200).send({status : "Item Deleted"})

    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error wityh delete item", error: err.message});
        
    })
})

router.route('/get/:id').get((req, res) => {
   Item.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })  


module.exports = router;