import React from 'react';
import headshot from '../../assets/images/headshot.jpg';
import './style.css';

function Biography() {
    return (
        <div className="App">
            <div className="App-header">
                <div className="container bio">
                <img src={headshot} className="headshot" alt="logo" />
                    <p> Molly has been writing under the name littlun for a few years now. Their music features 
                        classically influenced melodies and dark folk motifs. A full band formed around them in 2019 
                        to fill out the new songs. You can catch littlun play at local venues in Philly such as 
                        World Cafe Live, and stream them on apps such as Spotify.</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra malesuada tortor, mollis molestie
                        nisi vehicula sit amet. Cras dapibus commodo feugiat. Maecenas ut finibus urna. Vivamus leo dui, venenatis eu elit sed,
                        rhoncus finibus magna. Nam maximus, arcu non molestie congue, nisi nisi suscipit risus, at aliquet ligula lorem sed massa.
                        Donec nisl erat, lacinia vel venenatis vitae, porttitor at nibh. Orci varius natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Nullam quis nisl nunc. Donec pulvinar, dolor vitae elementum consequat,
                        ligula felis dapibus enim, eget efficitur risus diam vitae libero. Quisque tempor tellus urna, sed lobortis felis
                        convallis nec. Praesent sed tellus a felis tempor porttitor eget non erat. Ut malesuada quis mauris porta vulputate. </p>
                    <p> Quisque sollicitudin finibus finibus. Mauris vestibulum mi quis quam rhoncus condimentum. Mauris non lorem neque.
                        Mauris sagittis placerat eros, vel euismod risus auctor eget. Aenean dolor justo, bibendum et volutpat at, cursus a felis.
                        Proin porttitor, ante eget gravida suscipit, libero justo semper leo, ut mattis sapien ipsum sed dui. Sed at nisl eget
                        magna lobortis pulvinar vel efficitur eros. Quisque iaculis nec risus sit amet mattis. Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus. Nulla ornare lacinia elit vitae lacinia. Proin ornare risus eu feugiat
                        posuere. Suspendisse vestibulum augue at rhoncus ornare. </p>
                </div>
            </div>
        </div>
    );
};

export default Biography;