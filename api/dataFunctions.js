import data from './data';

export const ScreenData = () => {

    let allIds = data.flatMap((i => i.route.map(j => j.id = i.id)));
    let allStations = data.flatMap(i => i.route.map(j => j.station));
    let allTimes = data.flatMap(i => i.route.map(j => j.time[0]));

    let ScreenData = [];

    for (let i=0; i<allStations.length; i++) {
        let dataObj = {}
        dataObj.id = allIds[i];
        dataObj.station = allStations[i];
        dataObj.time = allTimes[i];
        ScreenData.push(dataObj)
      }

      return ScreenData;
};

export const ModelData = () => {

    let id = data.map(i => i.id);
    let route = data.map(i => i.route.map(j => j.station));
    let time = data.map(i => i.route.map(j => j.time[0]));

    let ModelData = []

    for (let i = 0; i < route.length; i++) {
        let dataObj = {}
        dataObj.id = id[i];
        dataObj.route = route[i]
        dataObj.time = time[i]
        ModelData.push(dataObj)
      }

      return ModelData

};

export default ScreenData;