describe('Merge Sort', function(){
    it('handles an empty array', function(){
        expect( mergeSort([]) ).toEqual( [] );
    });

    it('handles a single element array', function(){
        expect( mergeSort([1]) ).toEqual( [1] );
    });

    it('handles an unsorted array', function(){
        expect( mergeSort([3,2,1]) ).toEqual( [1,2,3] );
    });
}
