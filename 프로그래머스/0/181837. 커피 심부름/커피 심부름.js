function solution(order) {
    const price = order.map(menu=>{
        return menu.includes('americano') ? 4500 : menu.includes('cafelatte') ? 5000 : 4500
    })
    
    return price.reduce((a,c)=>a+c)
}