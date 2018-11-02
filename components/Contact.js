var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            <div className={'contactItem'}>
                <img className={'contactImage'} src={'https://image.flaticon.com/icons/svg/47/47976.svg'} />
                <p className={'contactLabel'}>
                    Imię: {this.props.item.firstName}
                </p>
                <p className={'contactLabel'}>
                    Nazwisko: {this.props.item.lastName}
                </p>
                <a href={'mailto:' + this.props.item.email}>
                    {this.props.item.email}
                </a>
            </div>
        )
    },
});

/* BEZ JSX

 React.createElement('div', { className: 'contactItem' },
                React.createElement('img', {
                    className: 'contactImage',
                    src: 'https://image.flaticon.com/icons/svg/47/47976.svg'
                }),
                React.createElement('p', { className: 'contactLabel' }, 'Imię: ' + this.props.item.firstName),
                React.createElement('p', { className: 'contactLabel' }, 'Nazwisko: ' + this.props.item.lastName),
                React.createElement('a', { className: 'contactEmail', href: 'mailto:' + this.props.item.email }, this.props.item.email)
            )
 */