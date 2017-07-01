import React, { Component } from 'react';

class FrameComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <nav>
                    <div className="nav">
                         {this.props.nav}
                    </div>
                </nav>
                <div className="layer_main">
                    <div className="banner">
                            {this.props.banner}
                    </div>

                    <form className="container" method="post" acceptCharset="UTF-8">
                        <div className="cn_main">
                            <h2 className="title">
                                WELCOME
                            </h2>
                            <div className="cnt">
                                <div className="cnt_left">
                                        {this.props.cntLeft}
                                </div>
                                <div className="cnt_right">
                                        {this.props.cntRight}
                                </div>
                                <div className="clear">
                                </div>
                            </div>

                            <div className="cnt1">
                                <p>
                                    Real person confirmation
                                </p>

                                <div className="cnt1_left">
                                        {this.props.cnt1Left}
                                </div>

                                <div className="cnt1_right">
                                        {this.props.cnt1Right}
                                </div>

                                <div className="clear">

                                </div>
                            </div>

                            <div className="contact">
                                {this.props.contact}
                            </div>

                            <div className="t_url">
                                {this.props.copyright}
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        )
    }

}

export {FrameComponent}




