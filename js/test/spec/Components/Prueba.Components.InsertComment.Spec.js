describe("Component InsertComment", function(){

    var theComponent;

    beforeEach(function(){
        theComponent = new Prueba.Components.InsertComment();
    });

    it('is a Component', function(){
        theComponent.should.be.an.instanceOf(CUORE.Component);
    });

    it("has a InsertComment renderer", function() {
        theComponent.renderer.should.be.an.instanceOf(Prueba.Renderers.InsertComment);
    });

    it("search the label for the placeholder", function(){
        theComponent.setI18NKey = sinon.spy();
        theComponent.placeholderKey = 'aKey';

        theComponent.onEnvironmentUp();

        theComponent.setI18NKey.should.have.been.calledWith('aKey');
    });

    it("search the label for the maxlength alert text", function(){
        theComponent.setI18NKey = sinon.spy();
        theComponent.maxlengthAlertTextKey = 'aKey';

        theComponent.onEnvironmentUp();

        theComponent.setI18NKey.should.have.been.calledWith('aKey');
    });

    it('sends a comment', function() {
        CUORE.Bus.emit = sinon.spy();

        theComponent.sendComment("aComment");
        
        CUORE.Bus.emit.should.have.been.calledWith('PRUEBA_addComment_EXECUTED', {text: "aComment"});
    });

    it('clean the input when a comment is added', function() {
        theComponent._clearInput = sinon.spy();
        
        theComponent.eventDispatch('PRUEBA_addComment_EXECUTED', {text: 'aComment'});

        theComponent._clearInput.should.have.been.called;
    });
});
