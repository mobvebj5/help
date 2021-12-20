// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010100030000000000000101010100010101000101010101010000010101000001010000010101010101000101000000010105000101000101000000000000010101000101010001010001010100000101000001010100010100010101010001010000000101000000040001010100010101010001010101010000010000000101010100000101000000000001010101010101000001010101000100010000010101010101010101000001000000010101010101010101000001010101000000020000000000000001010101000001010101000101010101000000000001010101010000000000000001010001010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . . . 2 2 2 2 . 2 
2 2 . 2 2 2 2 2 2 . . 2 2 2 . . 
2 2 . . 2 2 2 2 2 2 . 2 2 . . . 
2 2 . . 2 2 . 2 2 . . . . . . 2 
2 2 . 2 2 2 . 2 2 . 2 2 2 . . 2 
2 . . 2 2 2 . 2 2 . 2 2 2 2 . 2 
2 . . . 2 2 . . . . . 2 2 2 . 2 
2 2 2 . 2 2 2 2 2 . . 2 . . . 2 
2 2 2 . . 2 2 . . . . . 2 2 2 2 
2 2 2 . . 2 2 2 2 . 2 . 2 . . 2 
2 2 2 2 2 2 2 2 . . 2 . . . 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 . . . 
. . . . . . . . 2 2 2 2 . . 2 2 
2 2 . 2 2 2 2 2 . . . . . 2 2 2 
2 2 . . . . . . . 2 2 . 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.doorClosedWest,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
