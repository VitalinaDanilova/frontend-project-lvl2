import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const getFixturePath = (filename) => path.join('__fixtures__', filename);

export default (filename1, filename2) => {
  const data1 = JSON.parse(fs.readFileSync(getFixturePath(filename1)));
  const data2 = JSON.parse(fs.readFileSync(getFixturePath(filename2)));
  const keys = _.union(_.keys(data1), _.keys(data2)).sort();

  const diffs = keys.reduce((acc, key) => {
    const key1 = data1[key];
    const key2 = data2[key];
    if (!_.has(data1, key)) {
      return `${acc}\n  + ${key}: ${key2}`;
    } if (!_.has(data2, key)) {
      return `${acc}\n  - ${key}: ${key1}`;
    } if (data1[key] === data2[key]) {
      return `${acc}\n    ${key}: ${key1}`;
    }
    return `${acc}\n  - ${key}: ${key1}\n  + ${key}: ${key2}`;
  }, '');
  const result = `{${diffs}\n}\n`;
  return result;
};
