const assert = require('assert');
import URI from '../src/uri';

describe('URI', function () {
    describe('#URI.getSecondaryDomain()', function () {
        it('should return example when the value is example.worktile.com', function () {
            assert.equal(URI.getSecondaryDomain('example.worktile.com'), 'example');
        });

        it('should return empty when the value is worktile.com', function () {
            assert.equal(URI.getSecondaryDomain('worktile.com'), '');
        });

        it('should return empty when the value is xxx.baidu.com', function () {
            assert.equal(URI.getSecondaryDomain('xxx.baidu.com'), '');
        });

        it('should return xxx when the value is baidu.com', function () {
            assert.equal(URI.getSecondaryDomain('xxx.baidu.com', ['baidu']), 'xxx');
        });
    });

});