# fs (file system)

## Read a file

method name : readFileSync()
syntax : readFileSync("path", "encoding");

(9s an 1s binary)
// hello 123 --> binary
#### character set 
- ( mapping : h--> 67 " " --> 105 , 1 --> 49)
- Each english letter and some special charactes and numbers are represented by a unique character set (number) designated by ASCII (126 character) UNICODE
this character set converted in to binary and in how many bits defien by user

#### character encoding
- while converting to binary, encoding defines how many bits will it take to store a value.
- 1 byte = 8 bits.

#### buffer
- buffer is like an array which stores data in binary form
- by default display data in hexadecimal
- `<Buffer 49 74 20 77 69 6c 6c 20 6f 76 65 72 72 69 64 65>`


#### toString("utf-8") 
- this store in 8 bits
- default encoding valur of toString is utf-8

#### utf-8
- emojis takes 2-3 bytes
- utf-8 (Unicode transformation format) is popular because it is backward compatiable and variable length encoding.


## apeend in a file
Method name : appendFileSync()
Synatx : appendFileSync("path" "data to be apended");
- empty space also can be added
- Start from where previous cursor
- Cant be data reverted 
- If the file is not present at the specified path, then it will create a new file other-wise it will append the data at the end of the file.


## Delete a file
method name : unLinkSync()
Syntx : unLinkSync("",)

- If file is present then we got error "ENONENT : File not found"

## Creating a folder

- If the folder already exist then then get error folder already exist


