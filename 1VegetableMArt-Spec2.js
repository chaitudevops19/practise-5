///<reference types = 'Cypress'/>

describe('Vegetable Mart',function(){

  it ('Testing vegatable cart',function(){
   
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('CA')

    //Assertions
    cy.get('.product').should('have.length',5)
    cy.get('.product:Visible').should('have.length',4)
    cy.get('.products').find('.product').should('have.length',4)
    

    //then 
    cy.get('.brand').then(function(logoelement)
    {
    cy.log(logoelement.text())
 
    })

    //parent child
    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

    //loop

    cy.get('.products').find('.product').each(($el,index,$list) => {
     
      //Method 1
      /*
      const vegtext = $el.find('.product-name').text()
      cy.log(vegtext)
      if(vegtext.includes(Capsicum)){
        cy.wrap($el).contains('ADD TO CART').click()
        //cy.wrap($el).find('button').click()
      }
      */
    //Method 2 
      if($el.find('.product-name').text()=='Capsicum'){
        cy.log($el.find('.product-name').text())
        cy.wrap($el).contains('ADD TO CART').click()
      }
    })

    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()

    cy.contains('Place Order').click()

    cy.get('.chkAgree').check()
  
    //Static Dropdown
    cy.get('select').select('India').should('have.value','India')
    cy.get('button').click()
    


  })
})
