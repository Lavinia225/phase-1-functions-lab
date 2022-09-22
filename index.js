// Code your solution in this file!
function distanceFromHqInBlocks(input){ //264ft is one block. HQ is on 42nd street

    if (input > 42){
        return input - 42;
    }
    else if (input < 42){
        return 42 - input;
    }
}

function distanceFromHqInFeet(input){
    const blockCount = distanceFromHqInBlocks(input);
    return blockCount * 264;

}

function distanceTravelledInFeet(start, destination){
    let totalDistance;
    if (start > destination){
        totalDistance = start - destination;
    }
    else if (destination > start){
        totalDistance = destination - start;
    }
    return totalDistance * 264;
}

function calculatesFarePrice(start, destination){
    let totalDistance = distanceTravelledInFeet(start, destination);

    if (totalDistance < 400){
        return 0;
    }

    else if (totalDistance > 2500){
        return "cannot travel that far";
    }

    else if (totalDistance > 2000 && totalDistance < 2500){
        return 25;
    }

    else {
        return (totalDistance - 400) * .02;
    }}