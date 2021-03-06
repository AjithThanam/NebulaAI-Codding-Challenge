import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-hover-table',
  templateUrl: './hover-table.component.html',
  styleUrls: ['./hover-table.component.css']
})
export class HoverTableComponent implements OnInit {

  jsonResponse = { "jsonrpc": "2.0", "result": { "0": { "Info": { "Hostname": "p2_pc", "Resources": { "MemPhysical": 135209549824, "MemSwap": 146028879872, "MemReserved": 1853538304, "CPUs": 16, "GPUs": [ "GeForce RTX 2070" ] } }, "MemUsedMin": 0, "MemUsedMax": 0, "GpuUsed": false, "CpuUse": 0 }, "1": { "Info": { "Hostname": "p1_01", "Resources": { "MemPhysical": 1069441933312, "MemSwap": 550332522496, "MemReserved": 6726557696, "CPUs": 32, "GPUs": [] } }, "MemUsedMin": 180388626432, "MemUsedMax": 206158430208, "GpuUsed": false, "CpuUse": 3 }, "2": { "Info": { "Hostname": "p2_00", "Resources": { "MemPhysical": 1082133716992, "MemSwap": 550406971392, "MemReserved": 7861579776, "CPUs": 32, "GPUs": [ "GeForce RTX 2080 Ti" ] } }, "MemUsedMin": 32212254720, "MemUsedMax": 161061273600, "GpuUsed": false, "CpuUse": 32 }, "5": { "Info": { "Hostname": "filecoin", "Resources": { "MemPhysical": 261990604800, "MemSwap": 115964108800, "MemReserved": 2739478528, "CPUs": 48, "GPUs": [ "GeForce GTX 1080 Ti" ] } }, "MemUsedMin": 32212254720, "MemUsedMax": 161061273600, "GpuUsed": true, "CpuUse": 48 }, "7": { "Info": { "Hostname": "p2_05", "Resources": { "MemPhysical": 270131990528, "MemSwap": 138014613504, "MemReserved": 2862223360, "CPUs": 16, "GPUs": [] } }, "MemUsedMin": 34359738368, "MemUsedMax": 34359738368, "GpuUsed": true, "CpuUse": 16 } }, "id": 3 };
  specList:any;
  bytes:number = 1.074e+9;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.retrieveSpecList()
    this.parseResponse()
  }

  async retrieveSpecList(){
    await this.http.post('https://nbtest.free.beeceptor.com/miner', { title: 'Spec List for Hover Table' }).subscribe({
      next: data => this.specList = data,
      error: error => console.error('The following error occured:', error)
    })
  }

  parseResponse(){
    this.specList = this.jsonResponse["result"][0];
    this.convertByteToGib()
  }

  convertByteToGib(){
    this.specList["Info"]["Resources"]["MemPhysical"] = (this.specList["Info"]["Resources"]["MemPhysical"]/this.bytes).toFixed(2)
    this.specList["Info"]["Resources"]["MemSwap"] = (this.specList["Info"]["Resources"]["MemSwap"]/this.bytes).toFixed(2)
    this.specList["Info"]["Resources"]["MemReserved"] = (this.specList["Info"]["Resources"]["MemReserved"]/this.bytes).toFixed(2)
  }

}
