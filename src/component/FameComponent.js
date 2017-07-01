import React, { Component } from 'react';

class FrameComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    handleSubmit(){
        alert(1)
    }

    render() {
        return (
            <div className="main">
                <nav>
                    <div className="nav">
                         {this.props.nav}
                    </div>
                </nav>

                {this.props.main}

                <div className="layer_main">
                    <div className="banner">
                            {this.props.banner}
                    </div>

                    <form className="container" onSubmit={this.handleSubmit.bind(this)} method="post" acceptCharset="UTF-8">
                           {this.props.container}
                        <div className="cn_main">
                            <h2 className="title">
                                 {this.props.WELCOME}
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
                                    {this.props.REAL}
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




