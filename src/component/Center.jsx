import React from "react";
import "./center.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Center() {
  return (
    <div style={{ flex: 6 }} className="center">
      <div className="dashboard">
        <h2>
          Dashboard <span className="fa fa-bar-chart-o"></span>
        </h2>
        <div className="boxes">
          <div className="box">
            <div className="circle"></div>
            <div className="texte_content">
              <span className="fa fa-database"></span>
              <div className="titre">Clients</div>
              <div className="number">10</div>
            </div>
          </div>

          <div className="box">
            <div className="circle"></div>
            <div className="texte_content">
              <span className="fa fa-sellsy  icone"></span>
              <div className="titre">Statistique</div>
              <div className="number">+510</div>
            </div>
          </div>

          <div className="box">
            <div className="circle"></div>
            <div className="texte_content">
              <span className="fa fa-slideshare icone"></span>
              <div className="titre">Ventes</div>
              <div className="number">+100</div>
            </div>
          </div>
        </div>
      </div>

      <div className="lists">
        <div className="tableau">
          <h5>Liste des produits recents: </h5>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Des.</th>
                <th scope="col">PU</th>
                <th scope="col">QT</th>
                <th scope="col">PT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Vetements</td>
                <td>10</td>
                <td>5</td>
                <td>50</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Haricots</td>
                <td>2</td>
                <td>20</td>
                <td>40</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Pagnes</td>
                <td>20</td>
                <td>5</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
