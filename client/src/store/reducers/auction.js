const initState = {
    auctions: [
        { id : '1', title : 'qcy t1', startPrice : '100'},
        { id : '2', title : 'qcy t3', startPrice : '1000'},
        { id : '3', title : 'qcy t5', startPrice : '10000'},],
};

const auction = (state = initState, action) => {
    return state;
};

export default auction;