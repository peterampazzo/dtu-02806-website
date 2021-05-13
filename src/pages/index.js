import * as React from "react";

import MyRadar from "../viz/radar";
import FeelingsBarChart from "../viz/feelings-bar";
import FeelingsDist from "../viz/feelings-dist";
import Maps from "../components/maps";

const IndexPage = () => {
  return (
    <div className="relative bg-yellow-400 bg-opacity-25 overflow-hidden">
      <div className="mx-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-md text-center mt-6 mb-8">
            02806 Social data analysis and visualization
          </h3>
          <h1 className="text-4xl md:text-6xl text-center font-extrabold mb-10 font-serif">
            We created a speaker rider because journalism didn’t have one
          </h1>
          <div className="flex flex-col m-auto w-full md:w-4/6 justify-center">
            <h4 className="text-lg md:text-2xl text-center mb-8 m-auto">
              Organizers, speakers, and attendees need to all work together to
              make events more inclusive.
            </h4>
            <div className="border-yellow-600 border-t-2 border-b-2 py-4 px-6 mb-12">
              <ul className="list-none flex text-center justify-between text-lg font-medium flex-wrap flex-col md:flex-row">
                <li>Silvia De Sojo</li>
                <li>Stefan Petrovic</li>
                <li>Pietro Rampazzo</li>
              </ul>
            </div>
          </div>
          <main className="font-serif">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque dictum leo lorem. Curabitur blandit arcu at felis
              hendrerit, nec tincidunt sapien dignissim. Aenean auctor sagittis
              lectus id ullamcorper. Donec euismod magna urna. Vestibulum at
              faucibus est, a fermentum ex. Donec ultrices condimentum risus.
              Nullam ut ultricies velit. Nunc convallis ut ipsum efficitur
              malesuada. Nam in scelerisque enim, iaculis posuere tellus. Fusce
              ante leo, mollis at tortor at, sodales luctus tellus. Morbi
              fringilla varius molestie. Morbi sit amet pretium quam. Quisque ac
              dolor in mauris feugiat sagittis.
            </p>
            <Maps />
            <p>
              Donec ut dolor sit amet erat consequat tempor. Integer dictum
              ultrices justo, nec dapibus tortor suscipit quis. Ut hendrerit
              libero vitae felis euismod, non commodo lorem bibendum. Cras
              laoreet, arcu ac semper facilisis, ante nulla pulvinar odio, non
              congue ligula dui sed arcu. Donec vitae ipsum mollis, lacinia odio
              a, imperdiet nunc. className aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Sed a
              facilisis urna. Praesent porta dui id mi hendrerit, a posuere orci
              congue.
            </p>
            <MyRadar />
            <p>
              Duis gravida felis ac est pulvinar tincidunt. Vestibulum interdum
              tincidunt malesuada. Cras vel sagittis erat. Nullam ut mattis
              mauris, nec posuere dui. In vehicula mollis nisi. Vivamus blandit
              ipsum lorem, eu tincidunt orci rhoncus tristique. Donec augue
              sapien, mattis quis ullamcorper a, posuere at dui.
            </p>
            <FeelingsBarChart />
            <p>
              Nunc et libero est. Vestibulum fringilla, metus in tempus
              suscipit, quam arcu condimentum nunc, nec tincidunt tortor nisi
              fringilla erat. Nullam venenatis, nulla sit amet malesuada tempor,
              nisl odio placerat dui, placerat scelerisque ante felis congue
              nulla. Proin nec ornare ante. Donec sollicitudin nibh eu tellus
              sodales, eu sollicitudin quam euismod. Nullam eget arcu nec nunc
              auctor consequat sed sed nisl. Donec gravida risus in leo
              vulputate sodales. Suspendisse nibh purus, vestibulum nec porta
              ut, vehicula eget urna. Mauris eget imperdiet enim, quis ultrices
              eros. Quisque blandit elementum dolor, in venenatis nibh iaculis
              et. Sed tincidunt ut leo at vehicula. Duis tortor neque, mollis ac
              condimentum et, interdum nec nulla.
            </p>
            <div className="grid grid-cols-2">
              <FeelingsDist index={1} />
              <FeelingsDist index={2} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
