describe("Page Index", function() {
    var aPage;

    beforeEach(function() {
        aPage = new Prueba.Pages.Index("http://www.anydomain.com");
    });

    it("is a page", function() {
        aPage.should.be.an.instanceOf(CUORE.Page);
    });

    describe("has components", function() {
        var argsIndex = 0;
        
        beforeEach(function() {
            sinon.spy(aPage, "addComponent");
            aPage.initializeComponents();
        });
        
        afterEach(function() {
            argsIndex++;
        });

        it("has a component to insert a comment", function() {
            var theArguments = aPage.addComponent.args[argsIndex];

            aPage.addComponent.should.have.been.called;
            theArguments[0].should.be.an.instanceOf(Prueba.Components.InsertComment);
            theArguments[1].should.equal("insertComment");
            theArguments[2].should.be.equal(CUORE.Behaviours.HIJACK);
        });

        it("has a component to list comments", function() {
            var theArguments = aPage.addComponent.args[argsIndex];

            aPage.addComponent.should.have.been.called;
            theArguments[0].should.be.an.instanceOf(Prueba.Components.ListComments);
            theArguments[1].should.equal("listComments");
            theArguments[2].should.be.equal(CUORE.Behaviours.HIJACK);
        });

    });

});
