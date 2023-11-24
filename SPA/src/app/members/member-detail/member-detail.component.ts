import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMember } from 'src/app/models/member.interface';
import { MembersService } from 'src/app/services/members.service';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  imports: [CommonModule, TabsModule, GalleryModule]
})
export class MemberDetailComponent {
  member: IMember | undefined;

  images: GalleryItem[] = [];

  constructor(private membersService: MembersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    const username = this.route.snapshot.paramMap.get("username");
    if (!username) return;
    this.membersService.getMember(username).subscribe({
      next: member => {
        this.member = member,
          this.getImages()
      }
    });
  }

  getImages() {
    if (!this.member) return;
    for (const photo of this.member?.photos) {
      this.images.push(new ImageItem({ src: photo.url, thumb: photo.url }));
      this.images.push(new ImageItem({ src: photo.url, thumb: photo.url }));
    }
  }
}
