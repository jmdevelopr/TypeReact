import React, {Component} from 'react';

class Leaderboard extends Component {
    render() {
        return (
            <section className="Leaderboard grid">
                <header className="header">
                    <h1>Leaderboard</h1>
                    <p>The best scores of all the time</p>
                </header>
                <main className="scores">
                    <div className="buttons">
                        <button id="all-btn">All</button>
                        <button id="pc-btn">PC</button>
                        <button id="mobile-btn">Mobile</button>
                    </div>
                    <div className="test">
                    <table cellspacing="0" cellpadding="1" width="300">
                        <tr>
                            <th>1</th>
                            <th>MMMMMMMM</th>
                            <th>2.73s</th>
                            <th>Mobile</th>
                        </tr>
                        <tr>
                            <th>2</th>
                            <th>Guest</th>
                            <th>2.85s</th>
                            <th>Computer</th>
                        </tr>
                        <tr>
                            <th>3</th>
                            <th>Name</th>
                            <th>2.98s</th>
                            <th>Mobile</th>
                        </tr>
                        <tr>
                            <th>4</th>
                            <th>Frax</th>
                            <th>3.01s</th>
                            <th>Computer</th>
                        </tr>
                        <tr>
                            <th>5</th>
                            <th>Marcus</th>
                            <th>3.14s</th>
                            <th>Computer</th>
                        </tr>
                        <tr>
                            <th>1</th>
                            <th>MMMMMMMM</th>
                            <th>2.73s</th>
                            <th>Mobile</th>
                        </tr>
                        <tr>
                            <th>2</th>
                            <th>Guest</th>
                            <th>2.85s</th>
                            <th>Computer</th>
                        </tr>
                        <tr>
                            <th>3</th>
                            <th>Name</th>
                            <th>2.98s</th>
                            <th>Mobile</th>
                        </tr>
                        <tr>
                            <th>4</th>
                            <th>Frax</th>
                            <th>3.01s</th>
                            <th>Computer</th>
                        </tr>
                        <tr>
                            <th>5</th>
                            <th>Marcus</th>
                            <th>3.14s</th>
                            <th>Computer</th>
                        </tr>
                    </table>
                    </div>
                </main>
            </section> 
        )
    }
}

export default Leaderboard;