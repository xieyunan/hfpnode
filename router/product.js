let Goods = require('../model/goods.js');
let express = require('express')
let router = express.Router()
let arr = [
    new Goods(1,'抗糖原液','抗氧化','https://i0.hdslb.com/bfs/archive/b46f06f434d6d81c3084046142cd7d76257fd860.jpg@336w_190h.webp',129,1),
    new Goods(2,'祛痘原液','祛痘','https://i0.hdslb.com/bfs/archive/b46f06f434d6d81c3084046142cd7d76257fd860.jpg@336w_190h.webp',149,1),
    new Goods(3,'焕白原液','美白','https://i0.hdslb.com/bfs/archive/b46f06f434d6d81c3084046142cd7d76257fd860.jpg@336w_190h.webp',159,1),
    new Goods(4,'密集补水面膜','补水','https://i0.hdslb.com/bfs/archive/b46f06f434d6d81c3084046142cd7d76257fd860.jpg@336w_190h.webp',188,2),
    new Goods(5,'抗氧睡眠面膜','抗氧','https://i0.hdslb.com/bfs/archive/b46f06f434d6d81c3084046142cd7d76257fd860.jpg@336w_190h.webp',199,2),
    new Goods(6,'焕白套装','焕白','https://i0.hdslb.com/bfs/archive/b46f06f434d6d81c3084046142cd7d76257fd860.jpg@336w_190h.webp',324,3),
]
//侧边导航
router.get('/menuList',(req,res)=>{
    res.json([
        {id:1,name:'明星原液'},
        {id:2,name:'口碑面膜'},
        {id:3,name:'热销套装'},
        {id:4,name:'原液套装'},
        {id:5,name:'爆款囤货'},
        {id:6,name:'洁面水乳'},
        {id:7,name:'肌底精华'}
    ])
})

router.get('/productList/:id',(req,res)=>{
    let result = arr.filter(r=>{
        return parseInt(req.params.id) === r.typeid
    })
     res.json(result)
 })
 //详情
router.get('/detail/:id',(req,res)=>{
    let result = arr.find(r=>{
        return parseInt(req.params.id) === r.id
    })
     res.json(result)
 })
 module.exports = router