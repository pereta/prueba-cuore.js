describe("Renderer ListComments", function() {
    var theRenderer;
    var aComponent;
    var container;
    var $container;

    beforeEach(function() {
        theRenderer = new Prueba.Renderers.ListComments();
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

    it('renders the comments dates', function() {
        theRenderer.render(aComponent);

        var $dates = $('span.date', $container);

        $dates.should.exist;
        $dates.length.should.eql(2);
    });

    it('renders the comments text', function() {
        theRenderer.render(aComponent);

        var $text = $('span.commentText', $container);

        $text.should.exist;
        $text.length.should.eql(2);
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

        aComponent.size = sinon.stub().returns(2);
        aComponent.item = sinon.stub().returns({date: 'aDate',
                                                text: 'aText'});
    
        return aComponent;
    };

});