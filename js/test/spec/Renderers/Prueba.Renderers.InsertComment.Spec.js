describe("Renderer InsertComment", function() {
    var theRenderer;
    var aComponent;
    var container;
    var $container;

    beforeEach(function() {
        theRenderer = new Prueba.Renderers.InsertComment();
        container = createTestContainer();
        theRenderer.setContainer(container.id);
        aComponent = getDummyComponent();
        $container = $('#' + container.id);
    });

    afterEach(function() {
        container = document.getElementById('xhtmlToTest');
        container.innerHTML = '';
    });

    it("is a Renderer", function() {
        theRenderer.should.be.an.instanceOf(CUORE.Renderer);
    });

    it('renders the input for the comment', function() {
        
        theRenderer.render(aComponent);

        var $input = $('input', $container);

        $input.should.exist;
        $input.attr('type').should.eql('text');
        $input.attr('placeholder').should.eql('aText');
    });

    xit('submits the value when the key pressed in the input is enter', function() {
        aComponent.sendComment = sinon.spy();
        theRenderer.render(aComponent);

        var $input = $('input', $container);
        $input.val('a comment');
        var keyCode = 13;
        
        EVENT.TEST.keypress($input, keyCode);

        aComponent.sendComment.should.have.been.calledWith('a comment');
    });

    it('can clean the input', function() {
        theRenderer.render(aComponent);
        var $input = $('input', $container);
        $input.val('a comment');

        theRenderer._clearInput();
        
        $input.val().should.to.be.empty;
    });

    var createTestContainer = function() {
        var container = document.createElement('div');
        container.id = 'testingContainer';
        var panel = document.getElementById('xhtmlToTest');
        panel.appendChild(container);

        return container;
    };


    var getDummyComponent = function() {
        var aComponent = {};

        aComponent.isEnabled = sinon.stub().returns(true);
        aComponent.doYouReplace = sinon.stub().returns(false);
        aComponent.doYouHijack = sinon.stub().returns(true);

        aComponent.getPlaceHolderText = sinon.stub().returns('aText');
        aComponent.getMaxlengthAlertText = sinon.stub().returns('aText');
        
        return aComponent;
    };

});