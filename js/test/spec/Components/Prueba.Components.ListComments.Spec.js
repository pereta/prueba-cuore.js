describe("Component ListComments", function(){

    var theComponent;

    beforeEach(function(){
        theComponent = new Prueba.Components.ListComments();
    });

    it('is a CUORE List Component', function(){
        theComponent.should.be.an.instanceOf(CUORE.Components.List);
    });

    it("has a ListComments renderer", function() {
        theComponent.renderer.should.be.an.instanceOf(Prueba.Renderers.ListComments);
    });

    it('adds a comment and updates the renderer when a comment is added', function() {
        theComponent.list.push = sinon.spy();
        theComponent.updateRender = sinon.spy();
        
        theComponent.eventDispatch('PRUEBA_addComment_EXECUTED', {text: 'aComment'});

        theComponent.list.push.should.have.been.calledWith({date: new Date(), text: 'aComment'});
        theComponent.updateRender.should.have.been.called;
    });
    
});
