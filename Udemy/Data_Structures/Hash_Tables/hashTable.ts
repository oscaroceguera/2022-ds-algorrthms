export class HashTable {
  private data: Array<Array<any>>;
  private size: number;

  constructor(numBuckets: number) {
    this.size = numBuckets;
    this.data = new Array(numBuckets);
  }

  public set(key: string, value: any): void {
    let address = this.hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
  }

  public get(key: string): any {
    let address = this.hash(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  public keys(): string[] {
    const keysArray = new Array<string>();

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let item of this.data[i]) {
          keysArray.push(this.data[i][0][0]);
        }
      }
    }

    return keysArray;
  }

  public values(): string[] {
    const valuesArray = new Array<string>();

    for (let i = 0; i < this.data.length; ++i) {
      if (this.data[i]) {
        for (let item of this.data[i]) {
          valuesArray.push(item[1]);
        }
      }
    }

    return valuesArray;
  }

  private hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  public getSize(): number {
    return this.size;
  }

  public testHashFunction() {
    console.log(this.hash("grapes"));
    console.log(this.hash("grapess"));
    console.log(this.hash("grapes"));
  }
}

const hashTable = new HashTable(16);
  // hashTable.testHashFunction();

hashTable.set('grapes', 27);  // Θ(1)
hashTable.set('apples', 6);
hashTable.set('tangerines', 12);

console.log('apples:', hashTable.get('apples'));
console.log('grapes:', hashTable.get('grapes'));

console.log(hashTable.keys());
console.log(hashTable.values());