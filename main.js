function getFare(){
    let basefare = 50;
    let perKMrate = 15;
    let baseKM = 2;

    document.getElementById("farefare").innerHTML = `
        <div class="container bg-info">
            <div class="container bg-secondary">
                <h2 class="text-grey"><span class=" text-warning">eSakayMo</span> Fare Matrix!</h2>
            </div>    
                <img src="metro_Fare.png" style="float: left;" width="159px">
                <h2> PICK-UP LOCATION: </h2>
                <input type="number" id="upick" class="form-control w-50 ">
                <h2> DROP-Off LOCATION
                <input type="number" id="offdrop" class="form-control w-50 ">
        </div>
    `
}
