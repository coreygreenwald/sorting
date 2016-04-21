describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles a single element array', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
    });

    it('handles an unsorted array', function(){
        expect( bubbleSort([3,2,1]) ).toEqual( [1,2,3] );
    });

    // it('expects times to have been called to be n', function(){
    //     var sort = bubbleSort([3,2,1]);
    //     spyOn( sort, 'iterCount' ).and.callThrough();
    //     expect( sort.iterCount ).toEqual( 3 );
    // });

});
