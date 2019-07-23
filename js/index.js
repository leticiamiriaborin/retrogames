'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Carousel = function (_React$Component) {
    _inherits(Carousel, _React$Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {
            items: _this.props.items,
            active: _this.props.active,
            direction: ''
        };
        _this.rightClick = _this.moveRight.bind(_this);
        _this.leftClick = _this.moveLeft.bind(_this);
        return _this;
    }

    Carousel.prototype.generateItems = function generateItems() {
        var items = [];
        var level;
        console.log(this.state.active);
        for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
            var index = i;
            if (i < 0) {
                index = this.state.items.length + i;
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length;
            }
            level = this.state.active - i;
            var obj = this.state.items[index];
            items.push(React.createElement(Item, { key: index, id: index, className:obj.className, level: level, href:obj.href, label: obj.label }));
        }
        return items;
    };

    Carousel.prototype.moveLeft = function moveLeft() {
        var newActive = this.state.active;
        newActive--;
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        });
    };

    Carousel.prototype.moveRight = function moveRight() {
        var newActive = this.state.active;
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        });
    };

    Carousel.prototype.render = function render() {
        return React.createElement(
            'div',
            { id: 'carousel', className: 'noselect' },
            React.createElement('div',{ style:{'display': 'flex','flex-direction': 'column','justify-content': 'center'} },
                React.createElement(
                    'div',
                    { className: 'arrow arrow-left', onClick: this.leftClick },
                    React.createElement('i', { className: 'fi-arrow-left' })
                ),
            ),
            React.createElement(
                ReactCSSTransitionGroup,
                {
                    transitionName: this.state.direction
                },
                this.generateItems()
            ),
            React.createElement('div',{ style:{'display': 'flex','flex-direction': 'column','justify-content': 'center'} },
                React.createElement(
                    'div',
                    { className: 'arrow arrow-right', onClick: this.rightClick },
                    React.createElement('i', { className: 'fi-arrow-right' })
                )
            )
        );
    };

    return Carousel;
}(React.Component);

var Item = function (_React$Component2) {
    _inherits(Item, _React$Component2);

    function Item(props) {
        _classCallCheck(this, Item);

        var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

        _this2.state = {
            level: _this2.props.level
        };
        return _this2;
    }

    Item.prototype.render = function render() {
        console.log(this.props);
        var className = 'item level' + this.props.level + ' ' + this.props.className;
        return React.createElement(
            'a',
            { className: className, href:this.props.href },
            React.createElement('span', null, this.props.label || '')
        );
    };

    return Item;
}(React.Component);

var items = [
    { label:'Pacman', className:'pacman', href:'pacman.html' }, 
    { label:'Mario Bross 1', className:'mariobross1', href:'supermariobross.html' }, 
    { label:'Mario Bross 3', className:'mariobross3', href:'supermariobross3.html' }, 
    { label:'Megaman', className:'megaman', href:'megaman.html' }, 
    { label:'Bomberman', className:'bomberman', href:'bomberman.html' }, 
    { label:'Zelda', className:'zelda', href:'zelda.html' },
    { label:'Castlevania 1', className:'castlevania1', href:'castlevania.html' },
    { label:'Ducktales', className:'ducktales', href:'ducktales.html' },
    { label:'Metroid', className:'metroid', href:'metroid.html' },
    { label:'Tetris', className:'tetris', href:'tetris.html' },
    { label:'Tiny Toon', className:'tinytoon', href:'tinytoon.html' },
    { label:'Kirby', className:'kirby', href:'kirby.html' },
   // { label:'1943 The Battle of Midway', className:'1943', href:'1943.html' },
];
ReactDOM.render(React.createElement(Carousel, { items: items, active: 0 }), document.getElementById('app'));